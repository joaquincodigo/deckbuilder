export default function FilterTrapSection() {
  const trapTypes = ["Normal", "Continuous", "Counter"];

  const styles = {
    FiltersTrapSection: "grid grid-cols-12 auto-rows-[2rem] gap-y-4",
    label: "col-start-1 col-end-4",
    typeSelector: "col-start-4 col-end-13 bg-white border-btn-border h-8 px-2",
  };

  return (
    <div
      className={styles.FiltersTrapSection}
      data-component="FiltersSpellSection"
    >
      <label className={styles.label} htmlFor="spellType">
        Type
      </label>
      <select
        name="trapType"
        id="trapType"
        defaultValue="any"
        className={styles.typeSelector}
      >
        {trapTypes.map((type) => (
          <option key={type} value={type}>
            {type === "any" ? "Any" : type}
          </option>
        ))}
      </select>
    </div>
  );
}
