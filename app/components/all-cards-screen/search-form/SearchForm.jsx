import { useState, useEffect } from "react";
import SearchButton from "./search-button/SearchButton";
import SearchFiltersButton from "./filters-button/FiltersButton";
import SearchInput from "./search-input/SearchInput";
import FiltersPanel from "./filters-panel/FiltersPanel";
import { fetchQueriedCards } from "@/app/lib/fetchCards";

export default function SearchForm({
  setCurrentCards,
  setRemainingCardsToFetch,
  setIsLoading,
}) {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);

  const toggleFiltersPanel = (e) => {
    e.preventDefault();
    setIsFiltersPanelOpen((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    console.log("[SUBMIT FORM STAT]");
    setIsLoading(true);
    e.preventDefault();
    setIsFiltersPanelOpen(false);
    const formData = new FormData(e.target);
    console.log("FORM DATA OBJECT:", Object.fromEntries(formData));

    const [first72Queried, remainingCardsToFetch] = await fetchQueriedCards(
      formData
    );
    setCurrentCards(first72Queried);
    setRemainingCardsToFetch(remainingCardsToFetch);
    setIsLoading(false);
    console.log("[SUBMIT FORM END]");
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
        <SearchInput />
        <SearchButton />
        <SearchFiltersButton onClick={toggleFiltersPanel} />
        <FiltersPanel
          isFiltersPanelOpen={isFiltersPanelOpen}
          toggleFiltersPanel={toggleFiltersPanel}
        />
      </div>
    </form>
  );
}
