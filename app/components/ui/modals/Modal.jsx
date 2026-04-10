"use client";
import { createPortal } from "react-dom";

export default function Modal({ children, onBackdropClick }) {
  if (typeof window === "undefined") return null; 

  const styles = {
    backdrop:
      "fixed inset-0 w-screen h-screen bg-black/70 z-[999]",
  };

  return createPortal(
    <div
      data-component="ModalBackdrop"
      onClick={onBackdropClick}
      className={styles.backdrop}
    >
      {children}
    </div>,
    document.getElementById("modal-root")
  );
}
