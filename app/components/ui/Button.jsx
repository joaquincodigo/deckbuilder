"use client";

import { motion } from "motion/react";

export default function Button({
  onClick,
  label,
  icon: Icon,
  className = "",
  type = "button",
}) {
  const styles = {
    btn: "flex items-center rounded w-fit px-2 py-1",
    label: "font-bold",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.95  }}
      className={`${styles.btn} ${className}`}
    >
      {Icon && <Icon className="mr-1" />}
      {label && <span className={styles.label}>{label}</span>}
    </motion.button>
  );
}