import { useEffect, useState, useRef } from "react";
import { useScreen } from "@/app/context/ScreenContext";
import { fetchInitialCards } from "@/app/lib/fetchCards";
import CardsGrid from "./cards-grid/CardsGrid";
import LoadingFallback from "./LoadingFallback";
import Spinner from "../ui/Spinner";
import SearchForm from "./search-form/SearchForm";
import { flushSync } from "react-dom";

export default function AllCardsScreen() {
  const { currentScreen } = useScreen();
  const [currentCards, setCurrentCards] = useState();
  const [remainingCardsToFetch, setRemainingCardsToFetch] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Initial Load
  useEffect(() => {
    console.log("Running initial load");
    async function loadInitialCards() {
      console.log("loadInitialCards triggered");
      const [initialCardState, remainingCardsToFetch] =
        await fetchInitialCards();
      // Force a render before setting isLoading to false
      // to not trigger onCellsRendered callback of <Grid />
      // on half render with isLoading off.
      flushSync(() => {
        setCurrentCards(initialCardState);
        setRemainingCardsToFetch(remainingCardsToFetch);
      });
      setIsLoading(false);
    }
    loadInitialCards();
  }, []);

  const styles = {
    container: `w-full h-full bg-allcards-bg absolute inset-0 overflow-hidden px-2 pb-2 pt-14 ${
      currentScreen === "AllCardsScreen"
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`,
    spinnerContainer:
      "w-full h-full flex flex-col gap-y-2 items-center justify-center pb-20",
    loadingText: "text-white font-bold",
  };

  return (
    <div data-component="AllCardsScreen" className={styles.container}>
      <SearchForm
        setCurrentCards={setCurrentCards}
        setRemainingCardsToFetch={setRemainingCardsToFetch}
        setIsLoading={setIsLoading}
      />

      {isLoading ? ( // TODO: Fix this
        <div className={styles.spinnerContainer}>
          <Spinner size={50} color="white" />
          <p className={styles.loadingText}>Loading cards...</p>
        </div>
      ) : (
        <CardsGrid
          currentCards={currentCards}
          setCurrentCards={setCurrentCards}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          remainingCardsToFetch={remainingCardsToFetch}
          setRemainingCardsToFetch={setRemainingCardsToFetch}
        />
      )}
    </div>
  );
}
