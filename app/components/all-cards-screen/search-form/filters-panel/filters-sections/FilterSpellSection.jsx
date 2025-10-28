export default function FilterSpellSection() {
  const styles = {
    FilterSpellSection: "px-6",
    spellTypeSelector: "bg-white border-btn-border h-8 px-2",
  };

  const spellTypes = [
    "Normal",
    "Continuous",
    "Equip",
    "Quick-Play",
    "Field",
    "Ritual",
  ];

  return (
    <div
      data-component="FilterSpellSection"
      className={styles.FilterSpellSection}
    >
      <label htmlFor="spell-type">Spell type</label>
      <select
        id="spell-type"
        defaultValue="any"
        className={styles.spellTypeSelector}
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
