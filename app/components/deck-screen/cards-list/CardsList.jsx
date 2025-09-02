"use client";

import { useState, useEffect } from "react";
import CardCell from "./card-cell/CardCell";

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  useEffect(() => {
    async function fetchCardData() {
      const res = await fetch("/api/cards");
      const json = await res.json();
      setCards(json.data);
    }
    fetchCardData();
  }, []);
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const styles = {
    grid: "grid grid-cols-3 flex-grow overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <CardCell
          key={card.id}
          card={card}
          isSelected={selectedCardId === card.id}
          onSelect={() => {
            setSelectedCardId(card.id);
          }}
          onShowInfo={() => {
            alert("onShowInfo: not implemented yet !");
          }}
          onRemoveFromDeck={() => {
            alert("onRemoveDeck: not implemented yet");
          }}
        />
      ))}
    </div>
  );
}
