"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Grid } from "react-window";

import CardCell from "./card-cell/CardCell";
import CardModal from "../../modals/CardModal/CardModal";
import LoadingSpinner from "../../ui/LoadingSpinner";

export default function CardsList() {
  // State
  const [currentCards, setCurrentCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [gridContainerSize, setGridContainerSize] = useState({
    width: 0,
    height: 0,
  });

  // Refs to prevent getting stale state
  const currentCardsRef = useRef(currentCards);
  const isLoadingRef = useRef(isLoading);
  const containerRef = useRef(null);

  useEffect(() => {
    currentCardsRef.current = currentCards;
  }, [currentCards]);
  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  // Functions
  const fetchMoreCards = useCallback(async () => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true; // We have to update the ref now, we can't wait until the re-render useEffect to update the ref. That would be too late.
    setIsLoading(true);

    const offset = currentCardsRef.current.length;
    try {
      // Fetch the next 72 cards 
      const res = await fetch(`/api/cards?offset=${offset}&limit=72`);
      const newCards = await res.json();
      setCurrentCards((prev) => [...prev, ...newCards]);
    } catch (err) {
      console.error("fetchMoreCards error", err);
    } finally {
      isLoadingRef.current = false;
      setIsLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchMoreCards();
  }, [fetchMoreCards]);

  // Measure the grid container with a ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setGridContainerSize({
        width: Math.floor(width),
        height: Math.floor(height),
      });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // We render Grid only after we measured container to avoid width/height 0
  const columnCount = 3; // this is for mobile - TODO: Make it responsive
  const totalRows = Math.ceil(currentCards.length / columnCount);
  const columnWidth = gridContainerSize.width
    ? Math.floor(gridContainerSize.width / columnCount)
    : 0;
  const rowHeight = columnWidth ? Math.round(columnWidth * 1.45762) : 0; // 59:86 ratio

  // Infinite scrolling fetching trigger 
  const handleCellsRendered = ({ rowStopIndex } = {}) => {
    if (rowStopIndex === undefined) return;
    const prefetchThreshold = 5; // rows before the last one to trigger fecthing
    const lastRowIndex = totalRows -1
    if (rowStopIndex >= lastRowIndex - prefetchThreshold) {
      fetchMoreCards();
    }
  };

  // simple styles
  const styles = {
    container: "bg-gray-900 overflow-auto", // scrollable container
  };

  // wait for measurement
  if (gridContainerSize.width === 0 || gridContainerSize.height === 0) {
    return (
      <div
        ref={containerRef}
        className={styles.container}
        style={{ height: "100%" }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ height: "100%" }}
    >
      <Grid
        // react-window props
        cellComponent={CardCell}
        cellProps={{
          currentCards,
          selectedCard,
          setSelectedCard,
          setIsCardModalOpen,
          gridContainerSize,
          totalRows,
          removeFromDeck: () => alert("removeFromDeck: not implemented yet"),
          openModal: () => setIsCardModalOpen(true),
        }}
        columnCount={columnCount}
        rowCount={totalRows}
        columnWidth={columnWidth}
        rowHeight={rowHeight}
        overscanCount={10}
        style={{
          width: gridContainerSize.width,
          height: gridContainerSize.height,
        }}
        onCellsRendered={handleCellsRendered}
      />

      {isCardModalOpen && (
        <CardModal
          isOpen={isCardModalOpen}
          card={selectedCard}
          onBackdropClick={() => setIsCardModalOpen(false)}
          onBodyClick={() => setIsCardModalOpen(false)}
        />
      )}
    </div>
  );
}
