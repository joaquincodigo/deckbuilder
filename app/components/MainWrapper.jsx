import * as motion from "motion/react-client";
import DeckPanel from "@/app/components/deck-panel/DeckPanel";
import AllCardsPanel from "@/app/components/all-cards-panel/AllCardsPanel";

export default function MainWrapper({ cards }) {
  const styles = {
    main: "w-screen h-screen z-10 flex bg-green-500 overflow-hidden",
    panelsContainer: "flex"
  };

  return (
    <main className={styles.main}>
      <motion.div className={styles.panelsContainer} animate={{ x: "-20%" }}>
        <DeckPanel />
        <AllCardsPanel />
      </motion.div>
    </main>
  );
}
