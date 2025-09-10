"use client";

import { useState, useEffect } from "react";
import CardCell from "./card-cell/CardCell";
import CardModal from "../../modals/CardModal/CardModal";
import LoadingSpinner from "../../ui/LoadingSpinner";

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  useEffect(() => {
    async function fetchCardData() {
      if (isLoading) return;

      setIsLoading(true);
      const offset = cards.length;
      const response = await fetch(`/api/cards?offset=${offset}&limit=21`);
      const json = await response.json(); // fetched json is an array of cards

      setCards((prev) => [...prev, ...json]);
      setIsLoading(false);
    }
    fetchCardData();
  }, []);

  useEffect(() => {
    console.log("Cards state is:", cards);
  }, [cards]);
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const styles = {
    grid: "grid grid-cols-3 flex-grow overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  if (!cards) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <CardCell
          key={card.id}
          card={card}
          isSelected={card.id === selectedCard?.id}
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
      <CardModal
        isOpen={isCardModalOpen}
        card={selectedCard}
        onBackdropClick={() => setIsCardModalOpen(false)}
        onBodyClick={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
