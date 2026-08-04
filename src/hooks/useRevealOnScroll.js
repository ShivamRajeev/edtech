import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const markVisible = (element) => {
      element.classList.add("visible");
      element.setAttribute("data-revealed", "true");
    };

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => markVisible(el));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
