import { motion } from "motion/react";
import AddToDeckIcon from "./AddToDeckIcon";

export default function AddToDeckButton({ onClick }) {
  const styles = {
    button:
      "flex flex-col justify-center items-center font-bold text-white flex-1 border-2 border-btn-border bg-btn-bg",
  };

  return (
    <>
      {/* We are using a normal button here instead of "button" because we need to trigger the modals onPointerUp , not onPointerDown. This ensure a better experience scrolling while accidentally clicking a modal button */}
      <motion.button
        onMouseDown={onClick}
        className={styles.button}
        whileTap={{ scale: 0.9 }}
      >
        <span>
          <AddToDeckIcon />
        </span>

        <span>Add to deck</span>
      </motion.button>
    </>
  );
}
