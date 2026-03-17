import { useState } from "react";
import CardSelector from "./card-selector/CardSelector";
import LowResCardImage from "../../../ui/LowResCardImage";
import LowResCardPlaceholder from "../../../ui/LowResCardPlaceholder"

export default function CardCell({
  columnIndex, // Built in the library
  rowIndex, // Built in the library
  style, // Built in the library
  columnCount, // Built in the library
  filteredCards,
  selectedCard,
  setSelectedCard,
}) {
  const cardIndex = rowIndex * columnCount + columnIndex;
  const card = filteredCards[cardIndex];
  const [isCardLoading, setIsCardLoading] = useState(true);

  if (!card) return null

  return (
    <div
      data-component="CardCell"
      style={style}
      className="w-6 h-8 relative bg-black"
      onClick={() => setSelectedCard(card)}
    >
      {isCardLoading && <LowResCardPlaceholder />}
      <LowResCardImage card={card} setIsCardLoading={setIsCardLoading} />

      {selectedCard.id === card?.id && <CardSelector card={card} />}
    </div>
  );
}
