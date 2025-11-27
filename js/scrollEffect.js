document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".underline");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          // 한 번 애니메이션 후 관찰 종료하려면:
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  targets.forEach((t) => observer.observe(t));
});
