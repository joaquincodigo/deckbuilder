"use client";

import { motion } from "motion/react";

export default function Button({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      className={`touch-none ${className}`} // To prevent accidental swipes
      onPointerDown={(e) => e.stopPropagation()} // Also to prevent accidental swipes
    >
      {children}
    </motion.button>
  );
}
