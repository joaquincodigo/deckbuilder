export default function DefenseInput() {
  const styles = {
    AttackInput: "bg-pink-300",
  };

  return (
    <>
      <label htmlFor="def">DEF</label>
      <input
        className={styles.atkInput}
        id="def"
        type="number"
        min="0"
        max="9999"
        step="1"
      />
    </>
  );
}
