"use client";

import { useState, useEffect } from "react";
import CardCell from "./cards-list/card-cell/CardCell";

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  useEffect(() => {
    fetch("/testing-cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data.cards));
  }, []);
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const styles = {
    grid: "flex-grow grid grid-cols-3 gap-y-2 gap-x-2 overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  return (
    <div className={styles.grid}>
      {cards.map((card, i) => (
        <CardCell
          key={card.id}
          card={card}
          isSelected={selectedCardId === card.id}
          onSelect={() => {
            console.log(card.id);
            setSelectedCardId(card.id);
          }}
        />
      ))}
    </div>
  );
}
