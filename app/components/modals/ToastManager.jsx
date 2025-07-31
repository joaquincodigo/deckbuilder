"use client";

import { useEffect, useState } from "react";
import Toast from "@/app/components/modals/Toast";
import { AnimatePresence } from "motion/react";

let triggerToast;

export function ToastManager() {
  const [toastContent, setToastContent] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    triggerToast = (msg) => {
      setToastContent(msg);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 1800);
    };
  }, []);

  return (
    <AnimatePresence>
      <Toast key="toast" visible={isVisible}>
        {toastContent}
      </Toast>
    </AnimatePresence>
  );
}

export function showToast(msg) {
  if (triggerToast) triggerToast(msg);
}
