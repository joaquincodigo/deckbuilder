import Image from "next/image";
import { useState } from "react";
import CardSelector from "./card-selector/CardSelector";

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

  if (!card) return null;

  return (
    <div
      data-component="CardCell"
      style={style}
      className="w-6 h-8 relative bg-black"
      onClick={() => setSelectedCard(card)}
    >
      {isCardLoading && (
        <Image
          // LOADING PLACEHOLDER
          sizes="100%"
          src="/ui/card-back-low-res.webp" // TODO Compress the fuck-up of this img
          alt="Loading card placeholder..."
          className="absolute top-0 left-0"
          fill
          style={{ objectFit: "fill" }}
        />
      )}
      <Image
        // CARD IMAGE
        sizes="100%"
        src={`/card_images/lowres/${card.id}.webp`}
        alt={card.name}
        onLoad={() => setIsCardLoading(false)}
        fill
        style={{ objectFit: "fill" }}
      />
      {selectedCard.id === card.id && <CardSelector card={card} />}
    </div>
  );
}
