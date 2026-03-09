"use client";
import { createPortal } from "react-dom";

export default function Modal({ children, onBackdropClick }) {
  if (typeof window === "undefined") return null;

  const styles = {
    backdrop:
      "fixed inset-0 bg-black/70 z-[999] flex items-center justify-center",
    children: "bg-white w-20 h-20",
  };

  return createPortal(
    <div
      data-component="ModalBackdrop"
      onClick={() => {
        onBackdropClick();
        console.log("backdrop clicked");
      }}
      className={styles.backdrop}
    >
      {children}
    </div>,

    document.getElementById("modal-root")
  );
}
