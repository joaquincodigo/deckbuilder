
import { useMemo } from "react";
import DeckGrid from "./deck-grid/DeckGrid"

export default function DeckScreen({ premadeDecks, deck, screen }) {

  const styles = {
    DeckScreen: `bg-orange-500 overflow-y-auto ${screen === "deck"
        ? "opacity-100 visible h-full w-full"
        : "opacity-0 invisible w-0 h-0"
      }`,
  };

  return (
    <div className={styles.DeckScreen}>
      <DeckGrid deck={deck} />
    </div>
  );
}
