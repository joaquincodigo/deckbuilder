import DeckGrid from "./deck-grid/DeckGrid";
import Header from "./header/Header";

export default function DeckScreen({ premadeDecks, deck, screen }) {
  const styles = {
    DeckScreen: `bg-orange-500 overflow-y-auto flex ${
      screen === "deck"
        ? "opacity-100 visible h-full w-full"
        : "opacity-0 invisible w-0 h-0"
    }`,
  };

  return (
    <div data-component="DeckScreen" className={styles.DeckScreen}>
      <Header deck={deck} />
      <DeckGrid deck={deck} />
    </div>
  );
}
