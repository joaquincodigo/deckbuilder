import { useViewportWidth } from "@/app/hooks/useViewportSize";
import { Grid } from "react-window";
import CardCell from "./CardCell";

export default function CardsGrid({ currentCards }) {
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

  return (
    <Grid
      columnCount={getColumnCount()}
      columnWidth={getColumnWidth()}
      rowCount={getRowCount()}
      rowHeight={getRowHeight()}
      cellComponent={CardCell}
      cellProps={{ currentCards, columnCount: getColumnCount() }}
    />
  );
}
