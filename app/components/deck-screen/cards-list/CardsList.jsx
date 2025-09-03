"use client";

import { useState, useEffect } from "react";
import CardCell from "./card-cell/CardCell";
import CardModal from "../../modals/CardModal";

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

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

  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);

  const styles = {
    grid: "grid grid-cols-3 flex-grow overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <CardCell
          key={card.id}
          card={card}
          isSelected={card.id === selectedCard.id}
          onSelect={() => {
            setSelectedCard(card);
          }}
          onShowInfo={() => {
            setIsCardModalOpen(true);
          }}
          onRemoveFromDeck={() => {
            alert("onRemoveDeck: not implemented yet");
          }}
        />
      ))}
      {isCardModalOpen && <CardModal card={selectedCard} />}
    </div>
  );
}
