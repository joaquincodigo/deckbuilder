"use client";
import * as motion from "motion/react-client";

export default function SearchPanel() {
  const styles = {
    resizeHandler: "bg-blue-800 text-white h-18",
    content: "bg-blue-200 min-h-72 flex gap-x-3",
  };

  return (
    <motion.div drag="y" whileDrag={{ backgroundColor: "#f00" }}>
      <div className={styles.resizeHandler}>I am resize handler</div>

      <div
        className={styles.content}
        onPointerDownCapture={(e) => {
          if (e.target === e.currentTarget) {
            e.stopPropagation();
          }
        }}
      >
        {/* Card 1 */}
        <motion.div
          className="bg-red-300 w-16 h-24 rounded-md"
          drag
          whileDrag={{ backgroundColor: "black" }}
        ></motion.div>
        {/* Card 2 */}
        <motion.div
          className="bg-red-300 w-16 h-24 rounded-md"
          drag
          whileDrag={{ backgroundColor: "black" }}
        ></motion.div>
        {/* Card 3 */}
        <motion.div
          className="bg-red-300 w-16 h-24 rounded-md"
          drag
          whileDrag={{ backgroundColor: "black" }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
