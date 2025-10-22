export default function LevelSelector() {

  const styles = {
    levelSelector: "bg-white border-btn-border h-8 w-12 text-center",
  }

  return (
    <>
      <label htmlFor="level">Level</label>
      <select id="level" className={styles.levelSelector}>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </>
  );

}