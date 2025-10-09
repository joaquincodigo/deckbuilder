import { AnimatePresence, motion } from "motion/react";
import NewButton from "./buttons/NewButton";
import SaveButton from "./buttons/SaveButton";
import LoadButton from "./buttons/LoadButton";
import MoreButton from "./buttons/MoreButton";

export default function Menu({ isOpen }) {
  const styles = {
    menu: "flex w-100% gap-x-3 justify-around mb-3",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "250px", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles.menu}
        >
          <NewButton />
          <SaveButton />
          <LoadButton />
          <MoreButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
