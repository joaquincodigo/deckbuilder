export default function TypeSelector() {

  const types = [
    "any",
    "Aqua",
    "Beast",
    "Beast-Warrior",
    "Dinosaur",
    "Dragon",
    "Fairy",
    "Fiend",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Pyro",
    "Reptile",
    "Rock",
    "Sea Serpent",
    "Spellcaster",
    "Thunder",
    "Warrior",
    "Winged Beast",
    "Zombie",
  ];

  const styles = {
    label: "col-start-1 col-end-4",
    typeSelector:
      "col-start-4 col-end-13 bg-white border-btn-border h-8 px-2",
  };

  return (
    <>
      <label className={styles.label} htmlFor="category">Type</label>
      <select
        id="category"
        defaultValue="any"
        className={styles.typeSelector}
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type === "any" ? "Any" : type}
          </option>
        ))}
      </select>
    </>
  );
}
