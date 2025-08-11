"use client";

import { motion } from "motion/react";

export default function Button({ children, onClick, className = "" }) {
  return (
    <motion.button
      type="button"
      onPointerDown={(e) => {
        e.preventDefault(); // avoid focus/drag delay
        onClick?.(e);
      }}
      whileTap={{ scale: 0.9 }}
      className={`${className}`}
    >
      {children}
    </motion.button>
  );
}
