import Image from "next/image";
import { useState } from "react";

export default function CardCell({
  columnIndex,
  rowIndex,
  style,
  columnCount,
  currentCards,
}) {
  const cardIndex = rowIndex * columnCount + columnIndex;
  const card = currentCards[cardIndex];
  const [isCardLoading, setIsCardLoading] = useState(true);

  if (!card) return null;

  return (
    <div
      data-component="CardCell"
      style={style}
      className="w-6 h-8 relative bg-black"
    >
      {isCardLoading && (
        <Image
          sizes="100%"
          src="/ui/card-back-low-res.webp"
          alt="Loading card image..."
          className="absolute top-0 left-0"
          fill
          style={{ objectFit: "fill" }}
        />
      )}
      <Image
        sizes="100%"
        src={`/card_images/lowres/${card.id}.webp`}
        alt={card.name}
        onLoad={() => setIsCardLoading(true)}
        fill
        style={{ objectFit: "fill" }}
      />
    </div>
  );
}
