"use client";

import { useState, useEffect } from "react";
import CardCell from "./card-cell/CardCell";

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  useEffect(() => {
    async function fetchCardData() {
      const res = await fetch("/all_goat_cards.json");
      const json = await res.json();
      setCards(json.data);
    }
    fetchCardData();
  }, []);
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const styles = {
    grid: "grid grid-cols-3 flex-grow gap-y-2 gap-x-2 p-2 overflow-y-auto touch-pan-y bg-amber-800 mt-3",
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
        />
      ))}
    </div>
  );
}
