import { useState } from "react";
import { useViewportWidth } from "@/app/hooks/useViewportSize";
import { Grid } from "react-window";
import CardCell from "./CardCell";

export default function CardsGrid({ filteredCards, moveCardToDeck, deck }) {
  const [selectedCard, setSelectedCard] = useState(false);

  const getColumnCount = () => {
    // TODO: indicate columns for other screen size than mobile
    return 3;
  };

  const getColumnWidth = () => {
    const viewportWidth = useViewportWidth();
    const gridArea = viewportWidth - 16; // Tailwind p-2 = p-[8px]
    return gridArea / getColumnCount();
  };

  const getRowCount = () => {
    return Math.ceil(filteredCards.length / getColumnCount());
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

  const styles = {
    gridWrapper: "w-full flex-1",
  };

  return (
    <div className={styles.gridWrapper}>
      <Grid
        columnCount={getColumnCount()}
        columnWidth={getColumnWidth()}
        rowCount={getRowCount()}
        rowHeight={getRowHeight()}
        overscanCount={8}
        cellComponent={CardCell}
        cellProps={{
          filteredCards,
          columnCount: getColumnCount(),
          selectedCard,
          setSelectedCard,
        }}
      />
    </div>
  );
}
