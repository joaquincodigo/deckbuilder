import DeckScreen from "./deck-screen/DeckScreen";
import AllCardsScreen from "./all-cards-screen/AllCardsScreen";
import { useScreen } from "../context/ScreenContext";

export default function ScreensContainer() {
  const { currentScreen } = useScreen();

  const styles = {
    container: `h-64 w-screen flex-1 relative bg-green-500 z-30 ${
      currentScreen === "DeckScreen" ? "drop-shadow-xl/30" : "drop-shadow-xl/40"
    }`,
  };

  return (
    <main data-component="ScreensContainer" className={styles.container}>
      <DeckScreen />
      <AllCardsScreen />
    </main>
  );
}
