import { useEffect, useState, useRef } from "react";
import { useScreen } from "@/app/context/ScreenContext";
import CardsGrid from "./cards-grid/CardsGrid";
import Spinner from "../ui/Spinner";
import SearchForm from "./search-form/SearchForm";
import { getInitialCards } from "@/app/actions/getInitialCards";
import { flushSync } from "react-dom";

export default function AllCardsScreen() {
  const { currentScreen } = useScreen();
  const [isLoading, setIsLoading] = useState(true);
  const [currentCards, setCurrentCards] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [remainingCardsToFetch, setRemainingCardsToFetch] = useState(0);

  // Initial Load
  useEffect(() => {
    async function initialLoad() {
      const [initial72Cards, offset, remaining] = await getInitialCards();

      flushSync(() => {
        setCurrentCards(initial72Cards);
        setCurrentOffset(offset);
        setRemainingCardsToFetch(remaining);
      });

      setIsLoading(false);
    }

    initialLoad();
  }, []);

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTINGyyp
  useEffect(() => {
    console.log("currentCards:", currentCards);
  }, [currentCards]);
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTINGyyp

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
        setCurrentOffset={setCurrentOffset}
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
          remainingCardsToFetch={remainingCardsToFetch}
          setRemainingCardsToFetch={setRemainingCardsToFetch}
          currentOffset={currentOffset}
          setCurrentOffset={setCurrentOffset}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
}
