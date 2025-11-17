export default function LevelSelector() {
  const styles = {
    label: "col-start-1 col-end-4",
    levelComparisonSelect: "col-start-4 col-end-10 px-2",
    levelInput:
      "flex text-center bg-green-400 justify-center items-center col-start-11 col-end-13 text-center",
  };

  return (
    <>
      <label className={styles.label} htmlFor="level">
        Level
      </label>

      <select
        name="levelComparisonSelect"
        id="levelComparisonSelect"
        className={styles.levelComparisonSelect}
        defaultValue="equal"
      >
        <option value="equal">Equal to</option>
        <option value="less">Less than</option>
        <option value="greater">More than</option>
      </select>

      <select
        className={styles.levelInput}
        name="level"
        id="level"
        defaultValue="any"
      >
        <option value="any">Any</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </>
  );
}
