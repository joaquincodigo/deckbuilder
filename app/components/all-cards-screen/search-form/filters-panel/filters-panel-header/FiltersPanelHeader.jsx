import FiltersPanelHeaderButton from "./FiltersPanelHeaderButton";

export default function FiltersPanelHeader({
  filtersSection,
  setFiltersSection,
}) {
  const styles = {
    wrapper: "w-full mb-3",
    FiltersPanelHeader: "w-full flex justify-around py-2",
    instructions: `text-center ${filtersSection ? "hidden" : "block"}`,
  };

  return (
    <div className={styles.wrapper}>
      <div
        data-component="FiltersPanelHeader"
        className={styles.FiltersPanelHeader}
      >
        <FiltersPanelHeaderButton
          label="Monsters"
          imgSrc="/card-layouts/normal.webp"
          onClick={() => setFiltersSection("monster")}
          isSelected={filtersSection === "monster"}
        />
        <FiltersPanelHeaderButton
          label="Spells"
          imgSrc="/card-layouts/spell.webp"
          onClick={() => setFiltersSection("spell")}
          isSelected={filtersSection === "spell"}
        />
        <FiltersPanelHeaderButton
          label="Traps"
          imgSrc="/card-layouts/trap.webp"
          onClick={() => setFiltersSection("trap")}
          isSelected={filtersSection === "trap"}
        />
      </div>

      <p className={styles.instructions}>
        Select a card type to see all filters
      </p>
    </div>
  );
}
