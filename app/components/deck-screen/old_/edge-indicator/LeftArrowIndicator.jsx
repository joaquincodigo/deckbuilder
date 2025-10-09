import * as motion from "motion/react-client";
import LeftArrowIcon from "./LeftArrowIcon";

export default function LeftArrowIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 4 }}
      animate={{ opacity: [0, 1, 0], x: [4, -3, -3] }}
      transition={{
        duration: 1.5,
        times: [0, 0.7, 1],
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <LeftArrowIcon />
    </motion.div>
  );
}
