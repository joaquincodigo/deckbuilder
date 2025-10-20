import { flushSync } from "react-dom";
import { useViewportWidth } from "@/app/hooks/useViewportSize";
import { fetchAdditionalCards } from "@/app/lib/fetchCards";
import { Grid } from "react-window";
import CardCell from "./CardCell";

export default function CardsGrid({
  currentCards,
  setCurrentCards,
  isLoading,
  setIsLoading,
  formData,
  remainingCardsToFetch,
  setRemainingCardsToFetch,
}) {
  const getColumnCount = () => {
    return 3;
  };

  const getColumnWidth = () => {
    const viewportWidth = useViewportWidth();
    const gridArea = viewportWidth - 16; // 16px of padding.
    return gridArea / getColumnCount();
  };

  const getRowCount = () => {
    return currentCards.length / getColumnCount();
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

    // const threshold = 0;
    // const totalRows = getRowCount();

    if (visibleCells.rowStopIndex === allCells.rowStopIndex) {
      setIsLoading(true);
      if (remainingCardsToFetch > 0) {
        console.log("Fetching triggered");
        const offset = currentCards.length;

        const [additionalCards, remainingCardsToFetch] =
          await fetchAdditionalCards(formData, offset);

        // We force a render here to prevent another fetch mid-render
        // by onCellsRendered triggering too quickly
        flushSync(() => {
          setCurrentCards((prev) => [...prev, ...additionalCards]);
          setRemainingCardsToFetch(remainingCardsToFetch);
        });

        setIsLoading(false);
      }
    }
  };

  return (
    <Grid
      columnCount={getColumnCount()}
      columnWidth={getColumnWidth()}
      rowCount={getRowCount()}
      rowHeight={getRowHeight()}
      overscanCount={11}
      onCellsRendered={handleCellsRendered}
      cellComponent={CardCell}
      cellProps={{ currentCards, columnCount: getColumnCount() }}
    />
  );
}
