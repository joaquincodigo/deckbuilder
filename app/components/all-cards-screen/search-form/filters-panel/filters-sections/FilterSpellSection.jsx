export default function FiltersSpellSection() {
  const spellTypes = [
    "Normal",
    "Continuous",
    "Equip",
    "Quick-Play",
    "Field",
    "Ritual",
  ];

  const styles = {
    FiltersSpellSection: "grid grid-cols-12 auto-rows-[2rem] gap-y-4",
    label: "col-start-1 col-end-4",
    typeSelector: "col-start-4 col-end-13 bg-white border-btn-border h-8 px-2",
  };

  return (
    <div className={styles.FiltersSpellSection} data-component="FiltersSpellSection">
      <label className={styles.label} htmlFor="spellType">
        Type
      </label>
      <select
        name="spellType"
        id="spellType"
        defaultValue="any"
        className={styles.typeSelector}
      >
        {spellTypes.map((type) => (
          <option key={type} value={type}>
            {type === "any" ? "Any" : type}
          </option>
        ))}
      </select>
    </div>
  );
}
