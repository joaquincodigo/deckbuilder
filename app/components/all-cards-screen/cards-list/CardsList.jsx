"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Grid } from "react-window";

import CardCell from "./card-cell/CardCell";
import CardModal from "../../modals/CardModal/CardModal";
import LoadingSpinner from "../../ui/LoadingSpinner";

export default function CardsList() {
  const [currentCards, setCurrentCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [gridContainerSize, setGridContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const currentCardsRef = useRef(currentCards);
  const observerRef = useRef(null);
  const gridRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // This is needed to avoid stale state in the function loadMoreCards
    currentCardsRef.current = currentCards;
  }, [currentCards]);

  const fetchMoreCards = async () => {
    if (isLoading) setIsLoading(true);
    const offset = currentCardsRef.current.length; // always latest
    console.log("FETCHING CARDS");
    const res = await fetch(`/api/cards?offset=${offset}&limit=72`);
    const newCards = await res.json();

    setCurrentCards((prev) => [...prev, ...newCards]);
    setIsLoading(false);
  };

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  useEffect(() => {
    fetchMoreCards();
  }, []);

  useEffect(() => {
    console.log(gridContainerSize);
  }, [gridContainerSize]);

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const sentinelRef = (node) => {
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
          root: gridRef.current,
          rootMargin: "0px 0px 1500px 0px", //Only bottom margin
          threshold: 0,
        }
      );

      // Observe the sentinel element
      observerRef.current.observe(node);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setGridContainerSize({ width, height });
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const styles = {
    container: "flex-grow bg-gray-900 overflow-y-scroll",
    grid: "grid grid-cols-3 flex-grow touch-pan-y bg-amber-800", // FIX ME
  };

  if (!currentCards) {
    return <LoadingSpinner />;
  }

  return (
    <div ref={containerRef} className={styles.container}>
      <Grid
        cellComponent={CardCell}
        cellProps={{
          currentCards,
          selectedCard,
          setSelectedCard,
          setIsCardModalOpen,
          gridContainerSize,
          totalRows: Math.ceil(currentCards.length / 3),
          removeFromDeck: () => alert("removeFromDeck: not implemented yet"),
          openModal: () => {
            setIsCardModalOpen(true);
          },
        }}
        columnCount={3}
        rowCount={Math.ceil(currentCards.length / 3)}
        columnWidth={gridContainerSize.width / 3}
        rowHeight={(gridContainerSize.width / 3) * 1.45762} // 59:86 Ratio
        overscanCount={10}
        style={{
          // Using Tailwind doesnt work
          width: `${gridContainerSize.width}px`, // total grid width
          height: `${containerRef.height}px`, // total grid height
          backgroundColor: "#f0f0f0",
          overflow: "scroll",
        }}
      />

      {/* Card Details Modal */}
      {isCardModalOpen && (
        <CardModal
          isOpen={isCardModalOpen}
          card={selectedCard}
          onBackdropClick={() => setIsCardModalOpen(false)}
          onBodyClick={() => setIsCardModalOpen(false)}
        />
      )}
    </div>

    // <div ref={gridRef} className={styles.grid}>
    //   {/* The actual cards list */}
    //   {currentCards.map((card) => (
    //     <CardCell
    //       key={card.id}
    //       card={card}
    //       isSelected={card.id === selectedCard?.id}
    //       onSelect={() => {
    //         setSelectedCard(card);
    //       }}
    //       onShowInfo={() => {
    //         setIsCardModalOpen(true);
    //       }}
    //       onRemoveFromDeck={() => {
    //         alert("onRemoveDeck: not implemented yet");
    //       }}
    //     />
    //   ))}

    //   {/* Sentinel Div for fetching */}
    //   <div ref={sentinelRef} className="bg-yellow-400 col-span-3 h-12" />
    // </div>
  );
}
