"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

export default function Toast({ children, visible }) {
  const [mounted, setMounted] = useState(false);

  const styles = {
    body: "flex fixed bottom-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded shadow-lg z-90",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  /*
  I have to check if the element is mounted because
  otherwise SSR will try to render inside document.body
  and "document" does not exist on the server
   */
  if (!mounted) return null;

  return createPortal(
    <motion.div
      className={styles.body}
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>,
    document.body
  );
}
