export default function AttributeSelector() {
  const styles = {
    label: "col-start-1 col-end-4",
    attributeSelector:
      "col-start-4 col-end-13 bg-white border-btn-border h-8 px-2",
    option: "flex",
  };

  const attributes = [
    "any",
    "Dark",
    "Divine",
    "Eart",
    "Fire",
    "Light",
    "Water",
    "Wind",
  ];

  return (
    <>
      <label htmlFor="attribute" className={styles.label}>
        Attribute
      </label>
      <select
        id="attribute"
        defaultValue="any"
        className={styles.attributeSelector}
      >
        {attributes.map((attribute) => (
          <option key={attribute} value={attribute}>
            {attribute === "any" ? "Any" : attribute}
          </option>
        ))}
      </select>
    </>
  );
}
