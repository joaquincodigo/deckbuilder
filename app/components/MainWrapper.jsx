"use client";
import { useState } from "react";
import { useDrag } from "@use-gesture/react";
import * as motion from "motion/react-client";

export default function MainWrapper({ children }) {
  const [currentPanel, setCurrentPanel] = useState("deck");

  const bind = useDrag(
    ({ movement: [mx] }) => {
      const threshold = 70;
      if (mx > threshold && currentPanel !== "deck") {
        setCurrentPanel("deck");
      } else if (mx < -threshold && currentPanel !== "allcards") {
        setCurrentPanel("allcards");
      }
    },
    {
      axis: "x", // Lock to horizontal gestures only
      filterTaps: true, // Ignore tap events
    }
  );

  const styles = {
    main: "flex w-screen h-full overflow-hidden z-10 bg-green-500",
    panelsContainer: "flex",
  };

  return (
    <main className={styles.main}>
      <motion.div
        {...bind()}
        className={styles.panelsContainer}
        animate={{ x: currentPanel === "deck" ? "0%" : "-50%" }}
        transition={{
          type: "spring",
          stiffness: "1000",
          damping: "35",
        }}
      >
        {/* Children are DeckPanel and AllCardsPanel */}
        {children}
      </motion.div>
    </main>
  );
}
