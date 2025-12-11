import { useState, useEffect } from "react";
import SearchButton from "./search-button/SearchButton";
import SearchFiltersButton from "./filters-button/FiltersButton";
import SearchInput from "./search-input/SearchInput";
import FiltersPanel from "./filters-panel/FiltersPanel";
import { fetchQueriedCards } from "@/app/lib/fetchCards";
import { getInitialQueriedCards } from "@/app/actions/getInitialQueriedCards";

export default function SearchForm({
  setCurrentCards,
  setCurrentOffset,
  setRemainingCardsToFetch,
  setIsLoading,
}) {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);

  const toggleFiltersPanel = (e) => {
    e.preventDefault();
    setIsFiltersPanelOpen((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    setIsFiltersPanelOpen(false);
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target);

    const [initialQueriedCards, currentOffset, remainingCardsToFetch] =
      await getInitialQueriedCards(formData);

    setCurrentCards(initialQueriedCards);
    setCurrentOffset(currentOffset);
    setRemainingCardsToFetch(remainingCardsToFetch);

    setIsLoading(false);
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
