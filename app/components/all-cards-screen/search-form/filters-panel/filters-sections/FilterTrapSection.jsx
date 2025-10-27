export default function FilterTrapSection() {
  const styles = {
    FilterTrapSection: "px-6",
    trapTypeSelector: "bg-white border-btn-border h-8 px-2",
  };

  const trapTypes = ["Normal", "Continuous", "Counter"];

  return (
    <div
      data-component="FilterTrapSection"
      className={styles.FilterTrapSection}
    >
      <label htmlFor="trap-type">Trap type</label>
      <select
        id="trap-type"
        defaultValue="any"
        className={styles.trapTypeSelector}
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
