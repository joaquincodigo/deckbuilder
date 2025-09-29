import Image from "next/image";
import CardSelector from "./card-selector/CardSelector";
import { useState } from "react";

export default function CardCell({
  rowIndex,
  columnIndex,
  style,
  currentCards,
  selectedCard,
  setSelectedCard,
  gridContainerSize,
  openModal,
  removeFromDeck,
}) {
  const [loading, setLoading] = useState(true);
  const cardIndex = rowIndex * 3 + columnIndex;
  const card = currentCards[cardIndex];
  if (!card) return null;

  const imgWidth = Math.floor(gridContainerSize.width / 3);
  const imgHeight = Math.round(imgWidth * 1.45762);

  return (
    <div
      style={style}
      className="bg-gray-900"
      onClick={() => setSelectedCard(card)}
    >
      <Image
        src={`/card_images/lowres/${card.id}.webp`}
        alt={`card ${card.id}`}
        width={imgWidth}
        height={imgHeight}
        className={`transition-opacity duration-200 ease-in-out object-cover ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
      />

      {selectedCard?.id === card.id && (
        <CardSelector
          onShowInfo={openModal}
          onRemoveFromDeck={removeFromDeck}
        />
      )}
    </div>
  );
}
