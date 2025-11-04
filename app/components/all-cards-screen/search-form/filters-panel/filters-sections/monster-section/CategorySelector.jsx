export default function CategorySelector() {
  const styles = {
    label: "col-start-1 col-span-4",
    categorySelector: "col-start-5 col-span-6 bg-white border-btn-border h-8 px-2",
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
      <label className={styles.label} htmlFor="category">Category</label>
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
