import Image from "next/image";
import { useState } from "react";

export default function CardCell({
  card,
  isSelected,
  onSelect,
  onShowInfo,
  onRemoveFromDeck,
}) {
  const [loading, setLoading] = useState(true);

  const styles = {
    cell: "relative overflow-visible aspect-[59/86] bg-gray-900", // gray background as fallback
    img: "transition-opacity duration-300 ease-in-out",
  };

  return (
    <div className={styles.cell} onClick={onSelect}>
      <Image
        src={`/card_images/${card.id}.jpg`}
        alt="dummy card image"
        fill
        className={`${styles.img} ${loading ? "opacity-0" : "opacity-100"}`}
        onLoadingComplete={() => setLoading(false)}
      />
      {isSelected && (
        <CardSelector
          onShowInfo={onShowInfo}
          onRemoveFromDeck={onRemoveFromDeck}
        />
      )}
    </div>
  );
}
