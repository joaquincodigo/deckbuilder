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
    typeSelector: "bg-white border-btn-border h-8 px-2 text-center",
  };

  return (
    <>
      <label htmlFor="category">Type</label>
      <select
        id="category"
        defaultValue="any"
        className={styles.categorySelector}
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
