import FiltersPanelHeaderButton from "./FiltersPanelHeaderButton";

export default function FiltersPanelHeader({
  onClick,
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
          onClick={() => setFiltersSection("monster")}
          imgSrc="/card-layouts/normal.webp"
        />
        <FiltersPanelHeaderButton
          label="Spells"
          onClick={() => setFiltersSection("spell")}
          imgSrc="/card-layouts/spell.webp"
        />
        <FiltersPanelHeaderButton
          label="Traps"
          onClick={() => setFiltersSection("trap")}
          imgSrc="/card-layouts/trap.webp"
        />
      </div>

      <p className={styles.instructions}>
        Select a card type to see all filters
      </p>
    </div>
  );
}
