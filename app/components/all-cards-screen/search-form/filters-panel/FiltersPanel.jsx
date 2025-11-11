import { useState } from "react";
import FiltersPanelHeader from "./filters-panel-header/FiltersPanelHeader";
import FilterMonsterSection from "./filters-sections/monster-section/FilterMonsterSection";
import FilterSpellSection from "./filters-sections/FilterSpellSection";
import FilterTrapSection from "./filters-sections/FilterTrapSection";
import FiltersPanelFooter from "./filters-panel-footer/FiltersPanelFooter";

export default function FiltersPanel({
  isFiltersPanelOpen,
  toggleFiltersPanel,
}) {
  const [filtersSection, setFiltersSection] = useState();

  const styles = {
    panel: `fixed top-14 left-2 right-2 overflow-hidden bg-allcards-bg text-white text-lg transition-all ease-in-out duration-150 shadow-lg flex flex-col gap-y-8 ${
      isFiltersPanelOpen ? "max-h-[90%] px-2 py-4" : "max-h-0"
    }`,
  };

  return (
    <div data-component="FiltersPanel" className={styles.panel}>
      {/* HEADER */}
      <FiltersPanelHeader
        filtersSection={filtersSection}
        setFiltersSection={setFiltersSection}
      />

      {/* BODY */}
      {filtersSection === "monster" && <FilterMonsterSection />}
      {filtersSection === "spell" && <FilterSpellSection />}
      {filtersSection === "trap" && <FilterTrapSection />}

      {/* FOOTER */}
      {filtersSection && (
        <FiltersPanelFooter toggleFiltersPanel={toggleFiltersPanel} />
      )}
    </div>
  );
}
