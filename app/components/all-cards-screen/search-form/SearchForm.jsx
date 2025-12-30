import { useState, useEffect, use, useRef } from "react";
import SearchButton from "./search-button/SearchButton";
import SearchFiltersButton from "./filters-button/FiltersButton";
import SearchInput from "./search-input/SearchInput";
import FiltersPanel from "./filters-panel/FiltersPanel";
import { getQueriedCards } from "@/app/actions/getQueriedCards";

export default function SearchForm({
  setCurrentCards,
  setCurrentOffset,
  setRemainingCardsToFetch,
}) {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersSection, setFiltersSection] = useState("");
  const formRef = useRef();

  const toggleFiltersPanel = (e) => {
    e.preventDefault();
    setIsFiltersPanelOpen((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentCards([]);
    setIsFiltersPanelOpen(false);

    const formData = new FormData(e.target);

    const [queriedCards, currentOffset, remainingCardsToFetch] =
      await getQueriedCards(formData);

    setCurrentCards(queriedCards);
    setCurrentOffset(currentOffset);
    setRemainingCardsToFetch(remainingCardsToFetch);
  };

  const styles = {
    form: "fixed top-0 left-0 right-0 h-12 px-2 pt-2 z-10 bg-allcards-bg",
    searchBarWrapper: "h-full w-full flex gap-x-2",
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setIsFiltersPanelOpen(false);
    formRef.current.reset();
    setFiltersSection("");
  };

  return (
    <form
      data-component="SearchForm"
      ref={formRef}
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
