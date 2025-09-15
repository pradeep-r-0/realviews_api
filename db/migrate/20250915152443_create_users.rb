# db/migrate/20250915_create_users.rb
class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string  :name
      t.string  :email, null: false, index: { unique: true }

      # OTP-based login fields
      t.string   :otp_code
      t.datetime :otp_sent_at

      # (optional) tracking fields
      t.datetime :last_login_at
      t.string   :last_login_ip

      t.timestamps
    end
  end
end
