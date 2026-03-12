import { useState, useRef } from "react";
import SearchButton from "./search-button/SearchButton";
import SearchFiltersButton from "./filters-button/FiltersButton";
import SearchInput from "./search-input/SearchInput";
import FiltersPanel from "./filters-panel/FiltersPanel";

export default function SearchForm({ searchFormState, setSearchFormState }) {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);
  const [filtersSection, setFiltersSection] = useState("");
  const formRef = useRef(null);

  const toggleFiltersPanel = (e) => {
    e.preventDefault();
    setIsFiltersPanelOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setSearchFormState(data); // formState as plain JS object
  };

  const styles = {
    searchBarWrapper: "h-12 flex-shrink-0 w-full flex gap-x-2 bg-purple-500",
  };

  return (
    <form ref={formRef} data-component="SearchForm" onSubmit={handleSubmit}>
      <div className={styles.searchBarWrapper}>
        {/* <SearchInput
          searchFormState={searchFormState}
          setSearchFormState={setSearchFormState}
        />
        <SearchButton />
        <SearchFiltersButton onClick={toggleFiltersPanel} /> */}
      </div>
      <FiltersPanel
        isFiltersPanelOpen={isFiltersPanelOpen}
        setIsFiltersPanelOpen={setIsFiltersPanelOpen}
        filtersSection={filtersSection}
        setFiltersSection={setFiltersSection}
        setSearchFormState={setSearchFormState}
        formRef={formRef}
      />
    </form>
  );
}
