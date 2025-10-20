import { useEffect, useState, useRef } from "react";
import { useScreen } from "@/app/context/ScreenContext";
import { fetchInitialCards } from "@/app/lib/fetchCards";
import CardsGrid from "./cards-grid/CardsGrid";
import LoadingFallback from "./LoadingFallback";
import SearchForm from "./search-form/SearchForm";
import { flushSync } from "react-dom";

export default function AllCardsScreen() {
  const { currentScreen } = useScreen();
  const [currentCards, setCurrentCards] = useState();
  const [remainingCardsToFetch, setRemainingCardsToFetch] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  useEffect(() => {
    console.log("isLoading:", isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log("remianingCardsToFetch:", remainingCardsToFetch);
  }, [remainingCardsToFetch]);
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  useEffect(() => {
    console.log("currentCards:", currentCards);
  }, [currentCards]);

  // Initial Load
  useEffect(() => {
    console.log("Running initial load");
    async function loadInitialCards() {
      const [initialCardState, remainingCardsToFetch] =
        await fetchInitialCards();
      // Force a render before setting is loading to false
      // to not trigger onCellsRendered callback of <Grid />
      // on half render with isLoading off.
      flushSync(() => {
        setCurrentCards(initialCardState);
        setRemainingCardsToFetch(remainingCardsToFetch);
      });
      console.log("Initial load finished");
      setIsLoading(false);
    }
    loadInitialCards();
  }, []);

  const styles = {
    container: `w-full h-full bg-blue-500 absolute inset-0 overflow-hidden px-2 pb-2 pt-14 ${
      currentScreen === "AllCardsScreen"
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`,
  };

  return (
    <div data-component="AllCardsScreen" className={styles.container}>
      <SearchForm
        setCurrentCards={setCurrentCards}
        setRemainingCardsToFetch={setRemainingCardsToFetch}
      />
      {currentCards ? ( // TODO: Fix this
        <CardsGrid
          currentCards={currentCards}
          setCurrentCards={setCurrentCards}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          remainingCardsToFetch={remainingCardsToFetch}
          setRemainingCardsToFetch={setRemainingCardsToFetch}
        />
      ) : (
        <LoadingFallback />
      )}
    </div>
  );
}
