export default function DefenseInput() {
  const styles = {
    DefenseInput: "flex justify-center items-center px-2 w-14",
  };

  const handleInput = (e) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
  };

  return (
    <>
      <label htmlFor="def">DEF</label>
      <input
        className={styles.DefenseInput}
        id="def"
        type="number"
        min="0"
        max="9999"
        step="1"
        onInput={handleInput}
      />
    </>
  );
}
