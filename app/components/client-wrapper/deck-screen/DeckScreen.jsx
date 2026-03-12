import DeckGrid from "./deck-grid/DeckGrid";
import Header from "./header/Header";
import { useEffect } from "react";

export default function DeckScreen({ premadeDecks, deck, screen }) {
  const styles = {
    DeckScreen: `overflow-y-auto flex flex-col gap-y-2 ${
      screen === "deck"
        ? "opacity-100 visible h-full w-full"
        : "opacity-0 invisible pointer-events-none absolute inset-0"
    }`,
  };

  useEffect(() => {
    console.log("deck state:", deck);
  }, [deck]);

  return (
    <div data-component="DeckScreen" className={styles.DeckScreen}>
      <Header deck={deck} />
      <DeckGrid deck={deck} />
    </div>
  );
}
