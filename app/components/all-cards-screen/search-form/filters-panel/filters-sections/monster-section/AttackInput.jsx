export default function AttackInput() {
  const styles = {
    label: "col-start-1 col-end-4",
    attackCommparisonSelect: "col-start-4 col-end-10 px-2",
    attackInput:
      "flex text-center bg-green-400 justify-center items-center col-start-11 col-end-13 text-center",
  };

  const handleInput = (e) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
  };

  return (
    <>
      <label className={styles.label} htmlFor="atk">
        Attack
      </label>

      <select
        name="defenseComparisonSelect"
        id="defenseComparisonSelect"
        className={styles.attackCommparisonSelect}
        defaultValue={"equal"}
      >
        <option value="equal">Equal to</option>
        <option value="less">Less than</option>
        <option value="greater">More than</option>
      </select>

      <input
        className={styles.attackInput}
        name="atk"
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
