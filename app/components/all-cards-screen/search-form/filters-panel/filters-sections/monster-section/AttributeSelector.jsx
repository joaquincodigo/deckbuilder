import Image from "next/image";

export default function AttributeSelector() {
  const styles = {
    label: "col-start-1 col-span-4",
    attributeSelector: "col-start-5 col-span-6 bg-white border-btn-border h-8 px-2",
    option: "flex",
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
