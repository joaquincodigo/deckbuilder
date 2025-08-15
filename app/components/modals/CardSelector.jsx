"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function CardSelector({ targetRef }) {
  const [rect, setRect] = useState(null);

  useEffect(() => {
    if (!targetRef?.current) return; // 1) bail out if no element to track

    let frameId; // 2) keep last scheduled frame id for cleanup

    const update = () => {
      // 3) one frame of work
      setRect(targetRef.current.getBoundingClientRect()); // 3a) read latest box (viewport coords)
      frameId = requestAnimationFrame(update); // 3b) schedule next frame
    };

    update(); // 4) bootstrap the loop now, first measurement happens immediately

    return () => cancelAnimationFrame(frameId); // 5) on unmount/dep change, stop the loop
  }, [targetRef]);

  if (!rect) return null; // render nothing until we have a measurement

  // Draw an absolutely positioned overlay in a portal to <body>
  // rect.{top,left} are viewport-relative; add window scroll to convert to document coords
  return createPortal(
    <div
      style={{
        position: "absolute",
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
        // border: "20px solid blue",
        backgroundColor:"black",
        pointerEvents: "none", // clicks pass through to underlying grid
      }}
    />,
    document.body
  );
}
