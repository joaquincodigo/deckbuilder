import DeckScreen from "./deck-screen/DeckScreen";
import AllCardsScreen from "./all-cards-screen/AllCardsScreen";

export default function ScreenContainer({ currentScreen }) {
  const styles = {
    container: "w-full h-full bg-green-500",
  };

  return (
    <div data-component="ScreenContainer" className={styles.container}>
      {currentScreen === "DeckScreen" ? <DeckScreen /> : <AllCardsScreen />}
    </div>
  );
}
