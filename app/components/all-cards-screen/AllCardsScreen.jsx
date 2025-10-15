import { useEffect, useState } from "react";
import { useScreen } from "@/app/context/ScreenContext";
import { fetchInitialCards } from "@/app/lib/fetchCards";
import CardsGrid from "./CardsGrid/CardsGrid";
import LoadingCards from "./LoadingCards";

export default function AllCardsScreen() {
  const { currentScreen } = useScreen();
  const [currentCards, setCurrentCards] = useState();
  const [remainingCardsToFetch, setRemainingCardsToFetch] = useState();
  const [isFetching, setIsFetching] = useState(false);

  // Initial Load
  useEffect(() => {
    async function loadInitialCards() {
      setIsFetching(true);
      const [initialCardState, remainingCardsToFetch] =
        await fetchInitialCards();
      setCurrentCards(initialCardState);
      setRemainingCardsToFetch(remainingCardsToFetch);
      setIsFetching(false);
    }
    loadInitialCards();
  }, []);

  const styles = {
    container: `w-full h-full bg-blue-500 absolute inset-0 overflow-auto p-2 ${
      currentScreen === "AllCardsScreen"
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`,
  };

  return (
    <div data-component="AllCardsScreen" className={styles.container}>
      {currentCards ? (
        <CardsGrid currentCards={currentCards} isFetching={isFetching} />
      ) : (
        <LoadingCards />
      )}
    </div>
  );
}
