import DeckScreen from "./deck-screen/DeckScreen";
import AllCardsScreen from "./all-cards-screen/AllCardsScreen";

export default function ScreenContainer({ currentScreen }) {
  const styles = {
    container: "flex-1 relative bg-green-500",
  };

  return (
    <div data-component="ScreenContainer" className={styles.container}>
      <DeckScreen currentScreen={currentScreen} />
      <AllCardsScreen currentScreen={currentScreen} />
    </div>
  );
}
