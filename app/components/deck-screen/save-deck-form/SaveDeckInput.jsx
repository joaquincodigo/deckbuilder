export default function SaveDeckInput({ onChange, deckName }) {
  const styles = {
    wrapper: "relative w-full me-3",
    input: "w-full bg-white p-2 text-lg",
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Deck name"
        className={styles.input}
        id="deckNameInput"
        name="deckNameInput"
        onChange={onChange}
        value={deckName}
      />
    </div>
  );
}
