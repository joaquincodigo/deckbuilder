import { AnimatePresence, motion } from "motion/react";

export default function FiltersPanel({ isOpen }) {
  const styles = {
    body: "w-full h-72 bg-blue-200 overflow-hidden",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "250px", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles.body}
        >
          I AM FILTERS PANEL
        </motion.div>
      )}
    </AnimatePresence>
  );
}
