const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // RAKAM VE FAİZ ARTIŞI (Çok Yavaş Mod)
        if (
          el.classList.contains("count") ||
          el.classList.contains("percent-val")
        ) {
          const target = +el.dataset.target;
          let current = 0;
          const duration = 4000; // 4 Saniye (Daha yavaş)
          const increment = target / (duration / 16); // 60fps baz alınarak

          const updateCount = () => {
            current += increment;
            if (current < target) {
              el.innerText = el.classList.contains("percent-val")
                ? Math.floor(current) + "%"
                : Math.floor(current);
              requestAnimationFrame(updateCount);
            } else {
              el.innerText = el.classList.contains("percent-val")
                ? target + "%"
                : target;
            }
          };
          updateCount();
        }

        // ÇUBUK DOLMA
        if (el.classList.contains("progress-fill")) {
          el.style.width = el.dataset.width + "%";
        }

        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll(".count, .percent-val, .progress-fill")
  .forEach((item) => observer.observe(item));
