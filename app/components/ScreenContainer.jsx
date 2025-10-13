import DeckScreen from "./deck-screen/DeckScreen";
import AllCardsScreen from "./all-cards-screen/AllCardsScreen";

export default function ScreenContainer() {
  const styles = {
    container: "flex-1 relative bg-green-500 drop-shadow-xl/30 z-30",
  };

  return (
    <main data-component="ScreenContainer" className={styles.container}>
      <DeckScreen />
      <AllCardsScreen />
    </main>
  );
}
