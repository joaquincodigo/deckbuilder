"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import CardCell from "./card-cell/CardCell";
import CardModal from "../../modals/CardModal/CardModal";
import LoadingSpinner from "../../ui/LoadingSpinner";

export default function CardsList() {
  const [currentCards, setCurrentCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const currentCardsRef = useRef(currentCards);
  const observerRef = useRef(null);

  useEffect(() => {
    // This is needed to avoid stale state in the function loadMoreCards
    currentCardsRef.current = currentCards;
  }, [currentCards]);

  const fetchMoreCards = async () => {
    if (isLoading) return;

    setIsLoading(true);

    const offset = currentCardsRef.current.length; // always latest
    console.log("offset is", offset);
    const res = await fetch(`/api/cards?offset=${offset}&limit=21`);
    const newCards = await res.json();

    setCurrentCards((prev) => [...prev, ...newCards]);
    setIsLoading(false);
  };

  const sentinelRef = (node) => {
    console.log("sentinel ref defined");
    console.log("node is", node);
    // This gets executed when the sentinel div mounts

    // Removing the previous old observer if there's any
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (node) {
      // Define an observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const sentinelEntry = entries[0];
          if (sentinelEntry.isIntersecting) {
            console.log("intersection detected");
            fetchMoreCards();
          }
        },
        {
          root: null,
          rootMargin: "200px",
          threshold: 0,
        }
      );

      // Observe the sentinel element
      observerRef.current.observe(node);
    }
  };

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  useEffect(() => {
    console.log("CARDS:", currentCards);
  }, [currentCards]);
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const styles = {
    grid: "grid grid-cols-3 flex-grow overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  if (!currentCards) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.grid}>
      {/* The actual cards list */}
      {currentCards.map((card) => (
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

      {/* Sentinel Div for fetching */}
      <div ref={sentinelRef} className="bg-yellow-400 col-span-3 h-12"></div>

      {/* Modal for showing card details */}
      <CardModal
        isOpen={isCardModalOpen}
        card={selectedCard}
        onBackdropClick={() => setIsCardModalOpen(false)}
        onBodyClick={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
