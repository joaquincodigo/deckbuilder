"use client";
import { useEffect } from "react";

export default function Modal() {
  useEffect(() => {
    /*
  Intercept and block all drag-related events at the "capture phase"
  using the value true inside the event listeners. This way we prevent
  drag gestures from reaching any underlying components. 
  */

    const stop = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    window.addEventListener("dragstart", stop, true);
    window.addEventListener("mousedown", stop, true);
    window.addEventListener("mousemove", stop, true);
    window.addEventListener("touchstart", stop, true);
    window.addEventListener("touchmove", stop, true);
    window.addEventListener("pointerdown", stop, true);
    window.addEventListener("pointermove", stop, true);

    return () => {
      window.removeEventListener("dragstart", stop, true);
      window.removeEventListener("mousedown", stop, true);
      window.removeEventListener("mousemove", stop, true);
      window.removeEventListener("touchstart", stop, true);
      window.removeEventListener("touchmove", stop, true);
      window.removeEventListener("pointerdown", stop, true);
      window.removeEventListener("pointermove", stop, true);
    };
  }, []);

  const styles = {
    darkOverlay:
      "fixed inset-0 bg-black/70 flex items-center justify-center z-80 pointer-events-none touch-none select-none",
    body: "bg-white p-4 rounded z-90 pointer-events-auto",
  };

  return (
    <div className={styles.darkOverlay}>
      <div className={styles.body}>
        <div>Hello world</div>
        <button>Click Me</button>
      </div>
    </div>
  );
}
