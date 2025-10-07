import { AnimatePresence, motion } from "motion/react";
import ApplyFiltersButton from "./ApplyFiltersButton";

export default function FiltersPanel({ isOpen, onApplyFiltersClick }) {
  const styles = {
    panel: "w-full h-72 border-2 border-btn-border overflow-hidden mb-3 p-3",
    footer: "flex justify-end w-full",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "250px", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles.panel}
        >
          <div className={styles.footer}>
            <ApplyFiltersButton onClick={onApplyFiltersClick} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
