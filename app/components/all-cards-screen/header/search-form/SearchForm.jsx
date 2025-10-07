"use client";
import { useState } from "react";
import SearchInput from "./search-input/SearchInput";
import FiltersButton from "./filters/FiltersButton";
import FiltersPanel from "./filters/FiltersPanel";

export default function SearchForm({ setSearchFormData }) {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);

  const toggleFiltersPanel = (e) => {
    e.preventDefault();
    setIsFiltersPanelOpen((prev) => !prev);
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    setIsFiltersPanelOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    alert(data.allCardsQuery);
    setSearchFormData(data);
  };

  const styles = {
    form: "flex flex-col h-fit",
    searchBarWrapper: "flex h-10 gap-x-3 mb-3",
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.searchBarWrapper}>
        <SearchInput />
        <FiltersButton onClick={toggleFiltersPanel} />
      </div>

      <FiltersPanel
        isOpen={isFiltersPanelOpen}
        onApplyFiltersClick={handleApplyFilters}
      />
    </form>
  );
}
