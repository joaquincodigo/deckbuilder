import Image from "next/image";
import CardSelector from "./card-selector/CardSelector";

export default function CardCell({
  card,
  isSelected,
  onSelect,
  onShowInfo,
  onRemoveFromDeck,
}) {
  const styles = {
    cell: "relative overflow-visible bg-purple-400 aspect-[59/86]",
  };

  return (
    <div className={styles.cell} onClick={onSelect}>
      <Image
        src={card.imageUrl}
        alt="dummy card image"
        width={150}
        height={150}
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
