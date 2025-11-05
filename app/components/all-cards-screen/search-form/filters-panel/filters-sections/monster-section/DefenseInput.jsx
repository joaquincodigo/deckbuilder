export default function DefenseInput() {
  const styles = {
    label: "col-start-1 col-span-4",
    defenseComparisonSelect: "col-start-5 col-span-6 px-2",
    separator: "col-start-11 col-span-1",
    DefenseInput: "flex justify-center items-center px-2 w-14",
  };

  const handleInput = (e) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
  };

  return (
    <>
      <label className={styles.label} htmlFor="def">
        Defense
      </label>

      <select
        id="defenseComparisonSelect"
        className={styles.defenseComparisonSelect}
        defaultValue={"equal"}
      >
        <option value="equal">Equal to</option>
        <option value="less">Less than</option>
        <option value="greater">More than</option>
      </select>

      <span className={styles.separator}></span>

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
