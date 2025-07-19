import Card from "@/app/components/card/Card"

export default function DeckScreen() {
  const styles = {
    body: "w-screen h-full bg-amber-500 py-3 px-3",
    heading: "font-bold text-2xl",
    separator: "mb-3",
    selectLabel: "text-lg",
    select: "text-lg ms-3 bg-slate-200 p-1",
  };

  return (
    <div className={styles.body}>
      <p className={styles.heading}>Deck</p>
      <hr className={styles.separator} />
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
      <Card width={100}/>
    </div>
  );
}
