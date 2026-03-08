"use client";
import { useState } from "react";
import DeckTab from "../tabs/deck-tab/DeckTab";
import AllCardsTab from "../tabs/all-cards-tab/AllCardsTab";
import AllCardsScreen from "./all-cards-screen/AllCardsScreen";
import DeckScreen from "./deck-screen/DeckScreen";

export default function ClientWrapper({ allCards, premadeDecks }) {
  const [deck, setDeck] = useState(premadeDecks[1]);
  const [screen, setScreen] = useState("deck");

  const addCardToDeck = () => {
    alert("addCardToDeck not implemented yet");
  };

  const removeCardFromDeck = () => {
    alert("removeCardFromDeck not implemented yet");
  };

  const styles = {
    main: `fixed inset-x-0 bottom-12 top-0 ${
      screen === "deck" ? "bg-orange-500" : "bg-allcards-bg"
    }`,
    contentContainer: "fixed inset-x-0 top-14 bottom-14 top-0",
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <DeckScreen
            premadeDecks={premadeDecks}
            deck={deck}
            screen={screen}
            removeCardFromDeck={removeCardFromDeck}
          />

          <AllCardsScreen
            allCards={allCards}
            deck={deck}
            moveCardToDeck={addCardToDeck}
            screen={screen}
          />
        </div>
      </main>
      <nav>
        <DeckTab screen={screen} setScreen={setScreen} />
        <AllCardsTab screen={screen} setScreen={setScreen} />
      </nav>
    </>
  );
}
