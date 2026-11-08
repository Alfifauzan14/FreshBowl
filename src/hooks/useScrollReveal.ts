import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      items.forEach((el) => io.observe(el));

      return () => {
        io.disconnect();
      };
    } else {
      items.forEach((el) => el.classList.add("is-visible"));
    }
  }, []);
}
