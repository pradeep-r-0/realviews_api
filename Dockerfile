# syntax=docker/dockerfile:1
# check=error=true

ARG RUBY_VERSION=3.3.0
FROM docker.io/library/ruby:$RUBY_VERSION-slim AS base

WORKDIR /rails

# ---------------------------
# System dependencies (base)
# ---------------------------
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    curl \
    libjemalloc2 \
    libvips \
    postgresql-client \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Ensure binaries are always found (VERY IMPORTANT for Railway)
ENV PATH="/usr/bin:/bin:/usr/local/bin:${PATH}"

# Rails environment
ENV RAILS_ENV="production" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development test"

# ---------------------------
# Build stage
# ---------------------------
FROM base AS build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    git \
    libpq-dev \
    libyaml-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle/ "${BUNDLE_PATH}"/ruby/*/cache

COPY . .

RUN bundle exec bootsnap precompile --gemfile
RUN bundle exec bootsnap precompile app/ lib/

# ---------------------------
# Final runtime stage
# ---------------------------
FROM base

# ===========================
# OCR + PDF dependencies (FIX)
# ===========================
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    tesseract-ocr \
    poppler-utils \
    imagemagick \
    && rm -rf /var/lib/apt/lists/*

# Copy app + gems
COPY --from=build "${BUNDLE_PATH}" "${BUNDLE_PATH}"
COPY --from=build /rails /rails

# Create non-root user
RUN groupadd --system --gid 1000 rails && \
    useradd rails --uid 1000 --gid 1000 --create-home --shell /bin/bash && \
    chown -R rails:rails /rails

# Ensure runtime permissions
RUN chown -R rails:rails db log storage tmp

# Verify OCR tools exist at build time (debug safety)
RUN which tesseract && tesseract --version
RUN which pdftoppm

USER 1000:1000

# Entrypoint
ENTRYPOINT ["/rails/bin/docker-entrypoint"]

EXPOSE 80

CMD ["./bin/thrust", "./bin/rails", "server"]
