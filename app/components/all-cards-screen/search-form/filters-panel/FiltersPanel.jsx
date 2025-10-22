import { useState } from "react";
import FiltersPanelHeader from "./filters-panel-header/FiltersPanelHeader";
import FilterMonsterSection from "./filters-sections/FilterMonsterSection";
import FilterSpellSection from "./filters-sections/FilterSpellSection";
import FilterTrapSection from "./filters-sections/FilterTrapSection";

export default function FiltersPanel({
  isFiltersPanelOpen,
  toggleFiltersPanel,
}) {
  const [filtersSection, setFiltersSection] = useState();

  const styles = {
    panel: `fixed top-14 left-2 right-2 overflow-hidden bg-blue-500 text-white text-lg transition-all ease-in-out duration-200 shadow-lg ${
      isFiltersPanelOpen ? "h-42" : "h-0"
    }`,
  };

  return (
    <div data-component="FiltersPanel" className={styles.panel}>
      <FiltersPanelHeader setFiltersSection={setFiltersSection} />

      {filtersSection === "monster" && <FilterMonsterSection />}

      {filtersSection === "spell" && <FilterSpellSection />}

      {filtersSection === "trap" && <FilterTrapSection />}
    </div>
  );
}
