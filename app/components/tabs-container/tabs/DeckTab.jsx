import { useScreen } from "@/app/context/ScreenContext";

export default function DeckNavButton() {
  const { currentScreen, setCurrentScreen } = useScreen();

  const styles = {
    button: `h-full w-1/2 ${
      currentScreen === "DeckScreen" ? "bg-amber-500" : ""
    }`,
  };

  return (
    <button
      data-component="DeckNavButton"
      onMouseDown={() => setCurrentScreen("DeckScreen")}
      className={styles.button}
    >
      Deck
    </button>
  );
}
