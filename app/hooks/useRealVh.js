import { useEffect } from "react";

/*
  Mobile browsers often lie about the height of the viewport when using 100vh,
  because the browser UI (like the address bar) hides and shows dynamically.
  This causes layout jumps or unwanted scroll on mobile when using `h-screen` or `100vh`.

  This hook sets a CSS variable --vh to be equal to 1% of the real window.innerHeight,
  and updates it on resize. You can then use it in CSS or Tailwind with:
    h-[calc(var(--vh)_*_100)]
  to get a reliable full-height element even on mobile devices.
*/

export default function useRealVh() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01; // 1/100 of the current window height
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
    };
  }, []);
}