





document.querySelectorAll(".single-image-container").forEach((container) => {
  const video = container.querySelector("video");

  container.addEventListener("mouseenter", () => {
    video.play().catch(() => {});
  });

  container.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

