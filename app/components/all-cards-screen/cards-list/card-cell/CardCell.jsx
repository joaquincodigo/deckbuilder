import Image from "next/image";
import CardSelector from "./card-selector/CardSelector";
import { useState } from "react";

export default function CardCell({
  totalRows,
  rowIndex, // from react-window <Grid> component
  columnIndex, // from react-window <Grid> component
  style, // from react-window <Grid> component
  currentCards,
  selectedCard,
  setSelectedCard,
  setIsCardModalOpen,
  gridContainerSize,
  sentinelRef,
  openModal,
  removeFromDeck,
}) {
  const [loading, setLoading] = useState(true);

  const index = rowIndex * 3 + columnIndex;
  const card = currentCards[index];
  if (!card) return null;

  const styles = {
    cell: "bg-gray-900",
    img: "transition-opacity duration-300 ease-in-out object-cover",
  };

  // Dummy sentinel cell for infinite scroll
  console.log("rowIndex:", rowIndex);
  console.log("rowCount:", totalRows);
  if (rowIndex === totalRows) {
    return <div ref={sentinelRef} style={style} className={styles.cell} />;
  }

  // Normal Cell
  return (
    <div
      className={styles.cell}
      style={style}
      onClick={() => {
        setSelectedCard(card);
      }}
    >
      {/* Image */}
      <Image
        src={`/card_images/${card.id}.jpg`}
        alt="dummy card image"
        width={gridContainerSize.width / 3}
        height={(gridContainerSize.width / 3) * 1.45762} // 59:86 Ratio
        className={`${styles.img} ${loading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setLoading(false)}
      />

      {/* Selector */}
      {selectedCard?.id === card.id && (
        <CardSelector
          onShowInfo={openModal}
          onRemoveFromDeck={removeFromDeck}
        />
      )}
    </div>
  );
}
