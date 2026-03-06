import { useState, useMemo } from "react";
import CardsGrid from "./cards-grid/CardsGrid";
import SearchForm from "./search-form/SearchForm";
import filterCards from "@/app/lib/filterCards";
// import Spinner from "../ui/Spinner";
// import SearchForm from "./search-form/SearchForm";
// import NoMatchingResultsIcon from "./NoMatchingResultsIcon";

import DeckScreen from "../deck-screen/DeckScreen";

// export default function AllCardsScreen({ cards }) {
//   const { currentScreen } = useScreen();
//   const isLoadingCards = useRef(true);

//   const styles = {
//     container: `w-full h-full bg-allcards-bg absolute inset-0 overflow-hidden px-2 pb-2 pt-14 ${
//       currentScreen === "AllCardsScreen"
//         ? "opacity-100 visible"
//         : "opacity-0 invisible"
//     }`,
//     spinnerContainer:
//       "w-full h-full flex flex-col gap-y-2 items-center justify-center pb-20",
//     loadingText: "text-white font-bold",
//     noResults:
//       "text-white font-bold w-full h-full flex flex-col items-center justify-center pb-20",
//   };

//   return (
//     <div data-component="AllCardsScreen" className={styles.container}>
//       <SearchForm
//         setCurrentCards={setCards}
//         setCurrentOffset={setCurrentOffset}
//         setRemainingCardsToFetch={setRemainingCardsToFetch}
//         isLoadingCards={isLoadingCards}
//       />

//       {isLoadingCards.current && cards.length === 0 ? (
//         // Case 1: LOADING CARDS
//         <div className={styles.spinnerContainer}>
//           <Spinner size={50} color="white" />
//           <p className={styles.loadingText}>Loading cards...</p>
//         </div>
//       ) : cards.length === 0 ? (
//         // Case 2: NO MATCHING RESULTS
//         <div className={styles.noResults}>
//           <NoMatchingResultsIcon />
//           <p>No matching results.</p>
//         </div>
//       ) : (
//         // Case 3: SHOW RESULTS
//         <CardsGrid
//           currentCards={cards}
//           setCurrentCards={setCards}
//           remainingCardsToFetch={remainingCardsToFetch}
//           setRemainingCardsToFetch={setRemainingCardsToFetch}
//           currentOffset={currentOffset}
//           setCurrentOffset={setCurrentOffset}
//           isLoadingCards={isLoadingCards}
//         />
//       )}
//     </div>
//   );
// }

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
    AllCardsScreen: `bg-blue-900 text-white overflow-y-auto ${
      screen === "allCards"
        ? "opacity-100 visible h-full w-full"
        : "opacity-0 invisible w-0 h-0"
    }`,
  };

  return (
    <div className={styles.AllCardsScreen}>
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
