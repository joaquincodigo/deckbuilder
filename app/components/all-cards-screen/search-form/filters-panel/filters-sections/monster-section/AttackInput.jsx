export default function AttackInput() {
  const styles = {
    AttackInput: "bg-pink-300",
  };

  return (
    <>
      <label htmlFor="atk">ATK</label>
      <input
        className={styles.atkInput}
        id="atk"
        type="number"
        min="0"
        max="9999"
        step="1"
      />
    </>
  );
}
