import * as motion from "motion/react-client";

import DeckPanel from "@/app/components/DeckPanel";
import AllCardsPanel from "@/app/components/AllCardsPanel"

export default function MainWrapper({ cards }) {
  const styles = {
    main: "bg-green-500 h-screen w-screen overflow-hidden z-10",
  };

  return (
    <main className={styles.main}>
      <DeckPanel />
      <AllCardsPanel/>
    </main>
  );
}
