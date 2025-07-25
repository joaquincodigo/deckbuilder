export default function DeckSelector() {
  const styles = {
    wrapper: "mb-3",
    selectLabel: "text-lg",
    select: "text-lg ms-3 bg-slate-200 p-1",
  };

  return (
    <div className={styles.wrapper}>
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
  );
}
