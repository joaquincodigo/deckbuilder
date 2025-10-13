import { useScreen } from "@/app/context/ScreenContext";

export default function DeckTab() {
  const { currentScreen, setCurrentScreen } = useScreen();

  const styles = {
    tab: `fixed bottom-0 left-0 h-18 w-52/100 bg-amber-500 rounded-br-2xl rounded-bl-2xl ${
      currentScreen === "DeckScreen" ? "z-30" : "z-10"
    }`,
  };

  return (
    <button
      data-component="DeckTab"
      onMouseDown={() => setCurrentScreen("DeckScreen")}
      className={styles.tab}
    >
      Deck
    </button>
  );
}
