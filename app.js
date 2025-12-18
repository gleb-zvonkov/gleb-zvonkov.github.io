document.querySelectorAll(".single-image-container").forEach((container) => {
  const video = container.querySelector("video");
  let playTimeout;

  container.addEventListener("mouseenter", () => {
    playTimeout = setTimeout(() => {
      video.play().catch(() => {});
    }, 120); // delay to match fade
  });

  container.addEventListener("mouseleave", () => {
    clearTimeout(playTimeout);
    video.pause();
    video.currentTime = 0;
  });
});
