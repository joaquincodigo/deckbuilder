import Card from "@/app/components/card/Card";
import Modal from "@/app/components/modal/Modal";

export default function DeckScreen() {
  const random1to9 = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

  const styles = {
    body: "w-screen h-screen flex flex-col bg-amber-500 py-3 px-3", // Use full viewport height + flex column
    heading: "font-bold text-2xl",
    separator: "mb-3",
    selectLabel: "text-lg",
    select: "text-lg ms-3 bg-slate-200 p-1",
    cardContainer:
      "flex-grow grid grid-cols-3 gap-y-2 gap-x-2 overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  return (
    <div className={styles.body}>
      {/* Header section */}
      <p className={styles.heading}>Deck</p>
      <hr className={styles.separator} />

      {/* Deck selection section */}
      <div>
        <label htmlFor="deck-select" className={styles.selectLabel}>
          Selected deck:
        </label>
        <select name="decks" id="deck-select" className={styles.select}>
          <option value="dog">Fairy aggro</option>
          <option value="cat">Monarchs</option>
          <option value="hamster">Moki-moki</option>
          <option value="goldfish">Beatdown</option>
          <option value="goldfish">Earth aggro</option>
        </select>
      </div>
      {/* <Modal/> */}

      {/* Scrollable cards container */}
      <div className={styles.cardContainer}>
        {Array.from({ length: 36 }).map((_, i) => (
          <Card key={i} width={108} atk={random1to9()} def={random1to9()} />
        ))}
      </div>
    </div>
  );
}
