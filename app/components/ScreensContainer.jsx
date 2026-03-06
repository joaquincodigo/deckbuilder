import DeckScreen from "./deck-screen/DeckScreen";
import AllCardsScreen from "./all-cards-screen/AllCardsScreen";
import { useScreen } from "../context/ScreenContext";

export default function ScreensContainer({ cards, deck }) {
  const { currentScreen } = useScreen();

  const styles = {
    container: `h-full h-64 w-screen flex-1 relative bg-green-500 z-30 ${
      currentScreen === "DeckScreen" ? "drop-shadow-xl/30" : "drop-shadow-xl/40"
    }`,
  };

  return (
    <div data-component="ScreensContainer" className={styles.container}>
      <DeckScreen deck={deck} />
      <AllCardsScreen cards={cards} />
    </div>
  );
}
