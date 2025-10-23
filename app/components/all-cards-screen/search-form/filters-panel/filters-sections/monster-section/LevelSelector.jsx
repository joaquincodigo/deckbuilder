export default function LevelSelector() {
  const styles = {
    levelSelector: "bg-white border-btn-border h-8 px-2 text-center",
  };

  const levels = [
    "any",
    ...Array.from({ length: 12 }, (_, i) => i + 1),
  ];

  return (
    <>
      <label htmlFor="level">Level</label>
      <select id="level" defaultValue="any" className={styles.levelSelector}>
        {levels.map((level) => (
          <option key={level} value={level}>
            {level === "any" ? "Any" : level}
          </option>
        ))}
      </select>
    </>
  );
}
