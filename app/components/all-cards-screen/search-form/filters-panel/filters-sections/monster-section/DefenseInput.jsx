export default function DefenseInput() {
  const styles = {
    label: "col-start-1 col-end-4",
    defenseComparisonSelect: "col-start-4 col-end-10 px-2",
    defenseInput:
      "flex text-center bg-green-400 justify-center items-center col-start-11 col-end-13 text-center",
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
        name="defenseComparisonSelect"
        id="defenseComparisonSelect"
        className={styles.defenseComparisonSelect}
        defaultValue={"equal"}
      >
        <option value="equal">Equal to</option>
        <option value="less">Less than</option>
        <option value="greater">More than</option>
      </select>


      <input
        className={styles.defenseInput}
        name="def"
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
