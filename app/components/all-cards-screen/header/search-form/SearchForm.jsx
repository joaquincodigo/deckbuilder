"use client";
import { useState } from "react";
import SearchInput from "./search-input/SearchInput";
import FiltersButton from "./filters/FiltersButton";
import FiltersPanel from "./filters/FiltersPanel";

export default function SearchForm() {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);

  const toggleFiltersPanel = (e) => {
    e.preventDefault();
    setIsFiltersPanelOpen((prev) => !prev);
  };

  const styles = {
    form: "flex flex-col h-fit",
    searchBarWrapper: "flex h-10 gap-x-3 mb-3",
  };

  return (
    <form className={styles.form}>
      <div className={styles.searchBarWrapper}>
        <SearchInput />
        <FiltersButton onClick={toggleFiltersPanel} />
      </div>

      <FiltersPanel isOpen={isFiltersPanelOpen} />
    </form>
  );
}
