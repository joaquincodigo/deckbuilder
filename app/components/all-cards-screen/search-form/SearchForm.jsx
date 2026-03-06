import { useState } from "react";
import SearchButton from "./search-button/SearchButton";
import SearchFiltersButton from "./filters-button/FiltersButton";
import SearchInput from "./search-input/SearchInput";
import FiltersPanel from "./filters-panel/FiltersPanel";

export default function SearchForm({ searchFormState, setSearchFormState }) {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersSection, setFiltersSection] = useState("");

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

  const handleResetFilters = () => {
    return;
  };

  const styles = {
    form: "fixed top-0 left-0 right-0 h-12 px-2 pt-2 z-10 bg-allcards-bg",
    searchBarWrapper: "h-full w-full flex gap-x-2",
  };

  return (
    <form
      data-component="SearchForm"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <div className={styles.searchBarWrapper}>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <SearchButton />
        <SearchFiltersButton onClick={toggleFiltersPanel} />
        <FiltersPanel
          isFiltersPanelOpen={isFiltersPanelOpen}
          toggleFiltersPanel={toggleFiltersPanel}
          filtersSection={filtersSection}
          setFiltersSection={setFiltersSection}
          handleResetFilters={handleResetFilters}
        />
      </div>
    </form>
  );
}
