import { useScreen } from "@/app/context/ScreenContext";

export default function DeckNavButton() {
  const { setCurrentScreen } = useScreen();

  const styles = {
    button: "h-full w-1/2 bg-amber-500",
  };

  return (
    <button
      data-component="DeckNavButton"
      onClick={() => setCurrentScreen("DeckScreen")}
      className={styles.button}
    >
      Deck
    </button>
  );
}
