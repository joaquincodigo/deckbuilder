import { useState } from "react";
import { flushSync } from "react-dom";
import { useViewportWidth } from "@/app/hooks/useViewportSize";
import { fetchAdditionalCards } from "@/app/lib/fetchCards";
import { Grid } from "react-window";
import CardCell from "./CardCell";
import Spinner from "../../ui/Spinner";

export default function CardsGrid({
  currentCards,
  setCurrentCards,
  isLoading,
  setIsLoading,
  formData,
  remainingCardsToFetch,
  setRemainingCardsToFetch,
}) {
  const [isBottomSpinnerVisible, setIsBottomSpinnerVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  const getColumnCount = () => {
    // Todo, other than mobile
    return 3;
  };

  const getColumnWidth = () => {
    const viewportWidth = useViewportWidth();
    const gridArea = viewportWidth - 16; // 16px of padding.
    return gridArea / getColumnCount();
  };

  const getRowCount = () => {
    return Math.ceil(currentCards.length / getColumnCount());
  };

  const getRowHeight = () => {
    /*
    Cards have a 59:86 width/height ratio, so:

         Width  is to 59
    like Height is to 86

    By rule of three:
         Height = (Width * 86) / 59
    */

    const rowHeight = (getColumnWidth() * 86) / 59;
    return rowHeight;
  };

  const handleCellsRendered = async (visibleCells, allCells) => {
    if (isLoading) return;
    console.log("handleCells triggered");
    const threshold = 5;

    // Trigger fetching more cards when the user is 5 rows before the last one loaded
    if (visibleCells.rowStopIndex >= allCells.rowStopIndex - threshold) {
      if (remainingCardsToFetch > 0) {
        setIsBottomSpinnerVisible(true);
        const offset = currentCards.length;
        const [additionalCards, remainingCardsToFetch] =
          await fetchAdditionalCards(formData, offset);

        // We force a render here to prevent another fetch mid-render
        // by onCellsRendered triggering too quickly
        flushSync(() => {
          setCurrentCards((prev) => [...prev, ...additionalCards]);
          setRemainingCardsToFetch(remainingCardsToFetch);
        });

        setIsBottomSpinnerVisible(false);
      }
    }
  };

  const styles = {
    gridWrapper: "relative w-full h-full",
    spinner:
      "absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 rounded-full p-0.5",
  };

  return (
    <div className={styles.gridWrapper}>
      <Grid
        columnCount={getColumnCount()}
        columnWidth={getColumnWidth()}
        rowCount={getRowCount()}
        rowHeight={getRowHeight()}
        overscanCount={11}
        onCellsRendered={handleCellsRendered}
        cellComponent={CardCell}
        cellProps={{
          currentCards,
          columnCount: getColumnCount(),
          selectedCard,
          setSelectedCard,
        }}
      />
      {isBottomSpinnerVisible && (
        <Spinner className={styles.spinner} size={30} color="white" />
      )}
    </div>
  );
}
