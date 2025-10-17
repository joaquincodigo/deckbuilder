import { useEffect, useState, useRef } from "react";
import { useScreen } from "@/app/context/ScreenContext";
import { fetchInitialCards } from "@/app/lib/fetchCards";
import CardsGrid from "./cards-grid/CardsGrid";
import LoadingFallback from "./LoadingFallback";
import SearchForm from "./search-form/SearchForm";

export default function AllCardsScreen() {
  const { currentScreen } = useScreen();
  const [currentCards, setCurrentCards] = useState();
  const [remainingCardsToFetch, setRemainingCardsToFetch] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("isLoading:", isLoading);
  }, [isLoading]);

  // Initial Load
  useEffect(() => {
    console.log("Running initial load");
    async function loadInitialCards() {
      const [initialCardState, remainingCardsToFetch] =
        await fetchInitialCards();
      setCurrentCards(initialCardState);
      setRemainingCardsToFetch(remainingCardsToFetch);
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
      {currentCards ? (
        <CardsGrid currentCards={currentCards} />
      ) : (
        <LoadingFallback />
      )}
    </div>
  );
}
