import * as motion from "motion/react-client";
import RightArrowIcon from "./RightArrowIcon";

export default function RightArrowIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: [0, 1, 0], x: [-10, -3, -3] }}
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
