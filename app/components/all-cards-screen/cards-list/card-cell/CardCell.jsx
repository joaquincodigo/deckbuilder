import Image from "next/image";
import CardSelector from "./card-selector/CardSelector";
import { useState } from "react";

export default function CardCell({
  rowIndex, // from react-window <Grid> component
  columnIndex, // from react-window <Grid> component
  style, // from react-window <Grid> component
  currentCards,
  selectedCard,
  setSelectedCard,
  setIsCardModalOpen,
  onShowInfo,
  onRemoveFromDeck,
}) {
  const [loading, setLoading] = useState(true);

  const index = rowIndex * 3 + columnIndex;
  const card = currentCards[index];
  if (!card) return null;

  const styles = {
    cell: "relative overflow-visible aspect-[59/86] bg-gray-900", // gray background as fallback
    img: "transition-opacity duration-300 ease-in-out object-cover",
  };

  return (
    // <div
    //   className={styles.cell}
    //   onClick={() => {
    //     setSelectedCard(card);
    //   }}
    // >
    //   <Image
    //     src={`/card_images/${card.id}.jpg`}
    //     alt="dummy card image"
    //     // fill={true}
    //     // sizes="25vw"
    //     width={59}
    //     height={86}
    //     className={`${styles.img} ${loading ? "opacity-0" : "opacity-100"}`}
    //     onLoad={() => setLoading(false)}
    //   />
    //   {selectedCard?.id === card.id && (
    //     <CardSelector
    //       onShowInfo={onShowInfo}
    //       onRemoveFromDeck={onRemoveFromDeck}
    //     />
    //   )}
    // </div>

    <div className="bg-red-500 border-1 text-4xl" style={style}>
      {index}
    </div>
    // <></>
  );
}
