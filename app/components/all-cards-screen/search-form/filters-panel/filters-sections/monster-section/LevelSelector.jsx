export default function LevelSelector() {
  const styles = {
    label: "col-start-1 col-end-4",
    levelSelector:
      "col-start-4 col-end-13 bg-white border-btn-border h-8 px-2",
  };

  const levels = ["any", ...Array.from({ length: 12 }, (_, i) => i + 1)];

  return (
    <>
      <label className={styles.label} htmlFor="level">
        Level
      </label>
      <select name="level" id="level" defaultValue="any" className={styles.levelSelector}>
        {levels.map((level) => (
          <option key={level} value={level}>
            {level === "any" ? "Any" : level}
          </option>
        ))}
      </select>
    </>
  );
}
