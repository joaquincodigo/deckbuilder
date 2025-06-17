import { useEffect, useState } from "react";

/**
 * Watches for size changes on the given ref using ResizeObserver.
 *
 * Framer Motion dragConstraints rely on stable layout measurements.
 * If the constraint area is still changing size (due to fonts, layout shifts, images, etc),
 * Framer Motion may receive incorrect boundaries and block dragging prematurely.
 *
 * To prevent this, we debounce the size change detection:
 * - Every time the size changes, we reset a timer.
 * - Only when the size remains unchanged for `delay` ms, we set `ready = true`.
 *
 * This ensures that we only mark the layout as "ready" once it has fully settled.
 */

export function useStableSize(ref, delay = 100) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    let timeout;
    let lastHeight = ref.current.offsetHeight;

    const observer = new ResizeObserver(() => {
      const newHeight = ref.current.offsetHeight;
      if (newHeight !== lastHeight) {
        lastHeight = newHeight;
        clearTimeout(timeout);
        timeout = setTimeout(() => setReady(true), delay);
      }
    });

    observer.observe(ref.current);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [ref, delay]);

  return ready;
}
