"use client";
import { useState } from "react";
import { useDrag } from "@use-gesture/react";
import * as motion from "motion/react-client";

export default function MainWrapper({ children }) {
  const [currentScreen, setCurrentScreen] = useState("deck");

  const bind = useDrag(
    ({ movement: [mx] }) => {
      const threshold = 70;
      document.activeElement.blur();
      if (mx > threshold && currentScreen !== "deck") {
        document.activeElement.blur();
        setCurrentScreen("deck");
      } else if (mx < -threshold && currentScreen !== "allcards") {
        document.activeElement.blur();
        setCurrentScreen("allcards");
      }
    },
    {
      axis: "x", // Lock to horizontal gestures only
      filterTaps: true, // Ignore tap events
    }
  );

  const styles = {
    main: "flex w-screen h-full overflow-hidden z-10 bg-green-500",
    screensContainer: "flex",
  };

  return (
    <main className={styles.main}>
      <motion.div
        {...bind()}
        className={styles.screensContainer}
        animate={{ x: currentScreen === "deck" ? "0%" : "-50%" }}
        transition={{
          type: "spring",
          stiffness: "1000",
          damping: "35",
        }}
      >
        {/* Children are DeckScreen and AllCardsScreen */}
        {children}
      </motion.div>
    </main>
  );
}
