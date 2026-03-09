import { useState, useMemo, useEffect } from "react";
import CardsGrid from "./cards-grid/CardsGrid";
import SearchForm from "./search-form/SearchForm";
import filterCards from "@/app/lib/filterCards";
import NoMatchingResultsIcon from "./NoMatchingResultsIcon";

export default function AllCardsScreen({
  allCards,
  deck,
  moveCardToDeck,
  screen,
}) {
  const [searchFormState, setSearchFormState] = useState({});

  const filteredCards = useMemo(() => {
    const filtered = filterCards(searchFormState, allCards);
    return filtered;
  }, [allCards, searchFormState]);

  const styles = {
    AllCardsScreen: `bg-allcards-bg text-white overflow-y-auto ${
      screen === "allCards"
        ? "opacity-100 visible h-full w-full"
        : "opacity-0 invisible w-0 h-0"
    }`,
    noMatches: "flex justify-center items-center w-full h-full pb-20",
    noMatchesMsg: "flex flex-col items-center gap-y-2",
  };

  return (
    <div className={styles.AllCardsScreen}>
      <SearchForm
        searchFormState={searchFormState}
        setSearchFormState={setSearchFormState}
      />

      {filteredCards.length === 0 ? (
        <div className={styles.noMatches}>
          <div className={styles.noMatchesMsg}>
            <NoMatchingResultsIcon />
            <p>No results found</p>
          </div>
        </div>
      ) : (
        <CardsGrid
          filteredCards={filteredCards}
          deck={deck}
          moveCardToDeck={moveCardToDeck}
        />
      )}
    </div>
  );
}
