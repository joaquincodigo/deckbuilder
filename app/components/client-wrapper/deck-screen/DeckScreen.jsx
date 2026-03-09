import DeckGrid from "./deck-grid/DeckGrid";
import Toolbar from "./toolbar/Toolbar";

export default function DeckScreen({ premadeDecks, deck, screen }) {
  const styles = {
    DeckScreen: `bg-orange-500 overflow-y-auto ${
      screen === "deck"
        ? "opacity-100 visible h-full w-full"
        : "opacity-0 invisible w-0 h-0"
    }`,
    deckName: "px-2 mb-2"
  };

  return (
    <div className={styles.DeckScreen}>
      <Toolbar />
      <div className={styles.deckName}>
        <h1>{deck.name}</h1>
        <hr />
      </div>
      <DeckGrid deck={deck} />
    </div>
  );
}
