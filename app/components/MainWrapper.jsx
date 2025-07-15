
import DeckPanel from "@/app/components/deck-panel/DeckPanel";
import AllCardsPanel from "@/app/components/all-cards-panel/AllCardsPanel";
import DarkOverlay from "@/app/components/all-cards-panel/DarkOverlay";

export default function MainWrapper({ cards }) {
  const styles = {
    main: "bg-green-500 h-screen w-screen overflow-hidden z-10",
  };

  return (
    <main className={styles.main}>
      <DeckPanel />
      <DarkOverlay />
      <AllCardsPanel />
    </main>
  );
}
