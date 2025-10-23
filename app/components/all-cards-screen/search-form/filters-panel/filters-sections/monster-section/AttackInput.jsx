export default function AttackInput() {
  const styles = {
    AttackInput: "flex justify-center items-center px-2 w-15",
  };

  const handleInput = (e) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
  };

  return (
    <>
      <label htmlFor="atk">ATK</label>
      <input
        className={styles.AttackInput}
        id="atk"
        type="number"
        min="0"
        max="9999"
        step="1"
        onInput={handleInput}
      />
    </>
  );
}
