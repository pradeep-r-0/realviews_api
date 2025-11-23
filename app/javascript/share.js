export function shareRealViews() {
  if (navigator.share) {
    navigator.share({
      title: "RealViews",
      text: "Check out honest restaurant reviews!",
      url: window.location.href,
    });
  } else {
    alert("Share is not supported on this device. Copy the link: " + window.location.href);
  }
}

window.shareRealViews = shareRealViews;
