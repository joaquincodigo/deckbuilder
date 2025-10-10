import { useViewportWidth } from "@/app/hooks/useViewportSize";
import { Grid } from "react-window";
import Cell from "./Cell";

export default function CardsGrid({ currentCards }) {
  const getColumnCount = () => {
    return 3;
  };

  const getColumnWidth = () => {
    const viewportWidth = useViewportWidth();
    return viewportWidth / 3;
  };

  const getRowCount = () => {
    return 20;
    // return currentCards.length;
  };

  const getRowHeight = () => {
    /*
    Cards have a 59:86 width/height ratio, so:
         ColWidth  is to 59
    like ColHeight is to 86
    */

    const rowHeight = (getColumnWidth() * 86) / 59;
    return rowHeight;
  };

  const testArr = Array.from({ length: 800 }, (_, i) => i);

  return (
    <Grid
      columnCount={getColumnCount()}
      columnWidth={getColumnWidth()}
      rowCount={getRowCount()}
      rowHeight={getRowHeight()}
      cellComponent={Cell}
      cellProps={{ testArr }}
    />
  );
}

// data-component="CardsGrid"
