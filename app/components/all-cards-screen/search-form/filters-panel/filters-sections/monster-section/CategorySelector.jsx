export default function CategorySelector() {
  const styles = {
    categorySelector: "bg-white border-btn-border h-8 px-2",
  };

  const categories = [
    "any",
		"Normal",
		"Effect",
		"Fusion",
		"Ritual",
  ];

  return (
    <>
      <label htmlFor="category">Category</label>
      <select id="category" defaultValue="any" className={styles.categorySelector}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category === "any" ? "Any" : category}
          </option>
        ))}
      </select>
    </>
  );
}
