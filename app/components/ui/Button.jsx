"use client";

import { motion } from "motion/react";

export default function Button({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      className={`${className}`}
    >
      {children}
    </motion.button>
  );
}
