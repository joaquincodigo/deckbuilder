import * as motion from "motion/react-client";
import RightArrowIcon from "./RightArrowIcon";

export default function RightArrowIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -9 }}
      animate={{ opacity: [0, 1, 0], x: [-9, -2, -2] }}
      transition={{
        duration: 1.5,
        times: [0, 0.7, 1],
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <RightArrowIcon />
    </motion.div>
  );
}
