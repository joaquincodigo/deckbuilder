import FiltersPanelHeader from "./filters-panel-header/FiltersPanelHeader";
import FilterMonsterSection from "./filters-sections/monster-section/FilterMonsterSection";
import FilterSpellSection from "./filters-sections/FilterSpellSection";
import FilterTrapSection from "./filters-sections/FilterTrapSection";
import FiltersPanelFooter from "./filters-panel-footer/FiltersPanelFooter";

export default function FiltersPanel({
  isFiltersPanelOpen,
  setIsFiltersPanelOpen,
  filtersSection,
  setFiltersSection,
}) {
  const styles = {
    panel: `fixed top-14 right-0 flex flex-col overflow-hidden bg-allcards-bg text-white text-lg transition-all ease-in-out duration-150 shadow-lg gap-y-6 ${
      isFiltersPanelOpen ? "max-h-[90%] p-2" : "max-h-0"
    } ${isFiltersPanelOpen && filtersSection ? "pb-6" : ""}`,
    filtersWrapper: "px-6",
  };

  return (
    <div data-component="FiltersPanel" className={styles.panel}>
      {/* HEADER */}
      <FiltersPanelHeader
        filtersSection={filtersSection}
        setFiltersSection={setFiltersSection}
      />

      {/* BODY */}
      <div className={styles.filtersWrapper}>
        {filtersSection === "monster" && <FilterMonsterSection />}
        {filtersSection === "spell" && <FilterSpellSection />}
        {filtersSection === "trap" && <FilterTrapSection />}
      </div>

      {/* FOOTER */}
      {filtersSection && (
        <FiltersPanelFooter
          setIsFiltersPanelOpen={setIsFiltersPanelOpen}
        />
      )}
    </div>
  );
}
