export default function AttributeSelector() {
  const styles = {
    attributeSelector: "bg-white border-btn-border h-8 px-2",
  };

  const attributes = [
    "DARK",
    "DIVINE",
    "EARTH",
    "FIRE",
    "LIGHT",
    "WATER",
    "WIND",
  ];

  return (
    <>
      <label htmlFor="attribute">Attribute</label>
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
