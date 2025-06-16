"use client";
import { useMotionValue, useTransform, motion } from "framer-motion";

export default function SearchPanel({ constraintRef }) {
  const y = useMotionValue(0); // track drag position

  const styles = {
    container: "absolute left-0 w-full",
    handle: "bg-blue-800 text-white h-15 w-full cursor-row-resize",
    panel: "bg-blue-200 w-full min-h-72",
  };

  return (
    <div className={styles.container}>




      {/* DRAGGABLE HANDLE */}
      <motion.div
        drag="y"
        style={{ y }}
        dragConstraints={constraintRef}
        className={styles.handle}
      >
        <p>I am handle</p>
      </motion.div>



      {/* PANEL THAT FOLLOWS HANDLE */}
      <motion.div style={{ y }} className={styles.panel}>
        I am the content panel
      </motion.div>





    </div>
  );
}
