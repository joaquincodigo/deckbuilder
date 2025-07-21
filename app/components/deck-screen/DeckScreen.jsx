import Card from "@/app/components/card/Card";
import EdgeIndicator from "@/app/components/EdgeIndicator";

export default function DeckScreen() {
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  const random1to9 = () => {
    return Math.floor(Math.random() * 9) + 1;
  };
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const styles = {
    body: "w-screen h-screen flex flex-col py-3 ps-3 pe-9 bg-amber-500",
    heading: "font-bold text-2xl",
    separator: "mb-3",
    selectLabel: "text-lg",
    select: "text-lg ms-3 bg-slate-200 p-1",
    cardContainer:
      "flex-grow grid grid-cols-3 gap-y-2 gap-x-2 overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  return (
    <div className={styles.body}>
      {/* HEADER */}
      <p className={styles.heading}>Deck</p>
      <hr className={styles.separator} />

      {/* Deck selector*/}
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
      {/* /HEADER */}

      {/* DECK LIST */}
      <div className={styles.cardContainer}>
        {/*  TESTING-TESTING-TESTING-TESTING-TESTING-TESTING */}
        {Array.from({ length: 36 }).map((_, i) => (
          <Card key={i} width={108} atk={random1to9()} def={random1to9()} />
        ))}
        {/*  TESTING-TESTING-TESTING-TESTING-TESTING-TESTING */}
      </div>
      <EdgeIndicator />
    </div>
  );
}
