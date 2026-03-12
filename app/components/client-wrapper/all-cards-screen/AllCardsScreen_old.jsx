import { useState, useMemo } from "react";
import CardsGrid from "./cards-grid/CardsGrid";
import SearchForm from "./search-form/SearchForm";
import filterCards from "@/app/lib/filterCards";

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
    AllCardsScreen: `overflow-y-auto flex flex-col gap-y-2 bg-blue-900 text-white ${
      screen === "allCards"
        ? "opacity-100 visible h-full w-full"
        : "opacity-0 invisible w-0 h-0"
    }`,
  };

  return (
    <div data-component="AllCardsScreen" className={styles.AllCardsScreen}>
      <SearchForm
        searchFormState={searchFormState}
        setSearchFormState={setSearchFormState}
      />

      <CardsGrid
        filteredCards={filteredCards}
        deck={deck}
        moveCardToDeck={moveCardToDeck}
      />
    </div>
  );
}
