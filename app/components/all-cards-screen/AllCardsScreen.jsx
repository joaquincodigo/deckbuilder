import AllcardsEdgeIndicator from "@/app/components/all-cards-screen/AllCardsEdgeIndicator";
import SearchForm from "@/app/components/all-cards-screen/search-form/SearchForm";
import AllCardsHeader from "@/app/components/all-cards-screen/AllCardsHeader";
import CardsList from "@/app/components/deck-screen/cards-list/CardList";

export default function AllCardsScreen() {
  const styles = {
    body: "w-screen h-screen flex flex-row bg-indigo-500 touch-pan-y",
    outerWrapper: "flex flex-col bg-blue-500 p-3",
  };

  return (
    <div className={styles.body}>
      <AllcardsEdgeIndicator />
      <div className={styles.outerWrapper}>
        <AllCardsHeader />
        <SearchForm />
        <CardsList />
      </div>
    </div>
  );
}
