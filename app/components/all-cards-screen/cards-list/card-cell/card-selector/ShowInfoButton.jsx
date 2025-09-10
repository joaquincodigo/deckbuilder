import { motion } from "motion/react";

export default function showInfoButton({ onClick }) {
  const styles = {
    button: "bg-blue-500 font-bold rounded text-white",
  };

  return (
    <>
      {/* We are using a normal button here instead of "button" because we need to trigger the modals onPointerUp , not onPointerDown. This ensure a better experience scrolling while accidentally clicking a modal button */}
      <motion.button
        onClick={onClick}
        className={styles.button}
        whileTap={{ scale: 0.9 }}
      >
        View card info
      </motion.button>
    </>
  );
}
