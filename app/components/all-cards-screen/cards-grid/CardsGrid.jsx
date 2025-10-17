import { useViewportWidth } from "@/app/hooks/useViewportSize";
import { fetchCards } from "@/app/lib/fetchCards";
import { Grid } from "react-window";
import CardCell from "./CardCell";

export default function CardsGrid({ currentCards, isLoading, setIsLoading }) {
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

  function handleCellsRendered(visibleCells, allCells) {
    const threshold = 6; // how close to the end before triggering
    const totalRows = getRowCount();

    // when bottom of rendered area reaches near the end
    if (allCells.rowStopIndex >= totalRows - threshold) {
      console.log("fetch trigger here!");
    }
  }

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
