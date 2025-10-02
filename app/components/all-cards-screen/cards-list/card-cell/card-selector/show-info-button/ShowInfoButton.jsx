import { motion } from "motion/react";

export default function showInfoButton({ onClick }) {
  const styles = {
    button: "font-bold text-white flex-1 border-4 border-[#a67c2d] ",
  };

  const buttonStyles = {
    borderRadius: "5%",
    backgroundImage: `
    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), transparent 40%),
    radial-gradient(circle at center, #00ff55, #008a22 70%)
  `,
    boxShadow: `
    inset 0 0 15px rgba(0,0,0,0.5),
    0 4px 10px rgba(0,0,0,0.6)
  `,
  };

  return (
    <>
      {/* We are using a normal button here instead of "button" because we need to trigger the modals onPointerUp , not onPointerDown. This ensure a better experience scrolling while accidentally clicking a modal button */}
      <motion.button
        onMouseDown={onClick}
        className={styles.button}
        whileTap={{ scale: 0.9 }}
        style={buttonStyles}
      >
        View card info
      </motion.button>
    </>
  );
}
