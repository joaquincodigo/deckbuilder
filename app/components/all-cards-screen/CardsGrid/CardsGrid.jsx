import { useViewportWidth } from "@/app/hooks/useViewportSize";
import { fetchCards } from "@/app/lib/fetchCards";
import { Grid } from "react-window";
import CardCell from "./CardCell";

export default function CardsGrid({ currentCards, isFetching }) {
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

         ColWidth  is to 59
    like ColHeight is to 86

    By rule of three:
         ColHeight = (ColWidth * 86) / 59
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

  <Grid
    columnCount={10}
    rowCount={100}
    columnWidth={100}
    rowHeight={50}
    cellComponent={CardCell}
    onCellsRendered={handleCellsRendered}
  />;

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
