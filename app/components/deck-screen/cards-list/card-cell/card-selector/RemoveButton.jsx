import { motion } from "motion/react";

export default function RemoveButton({ onClick }) {
  const styles = {
    button: "bg-orange-500 font-bold rounded z-50",
  };
  return (
    <motion.button
      onClick={onClick}
      className={styles.button}
      whileTap={{ scale: 0.9 }}
    >
      {/* We are using a normal button here instead of "button" because we need to trigger the modals onPointerUp , not onPointerDown. This ensure a better experience scrolling while accidentally clicking a modal button */}
      Remove from deck
    </motion.button>
  );
}
