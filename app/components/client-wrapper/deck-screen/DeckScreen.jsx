import DeckGrid from "./deck-grid/DeckGrid";
import Header from "./header/DeckHeader";

export default function DeckScreen({ deck, premadeDecks, screen }) {
  const styles = {
    DeckScreen: `overflow-y-auto flex flex-col gap-y-2 ${
      screen === "deck"
        ? "opacity-100 visible h-full w-full"
        : "opacity-0 invisible pointer-events-none absolute inset-0"
    }`,
  };

  return (
    <div data-component="DeckScreen" className={styles.DeckScreen}>
      <Header deck={deck} premadeDecks={premadeDecks} />
      <DeckGrid deck={deck} />
    </div>
  );
}
