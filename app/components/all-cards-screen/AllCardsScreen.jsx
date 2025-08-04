import EdgeIndicator from "./edge-indicator/EdgeIndicator";
import SearchForm from "./header/search-form/SearchForm";
import Header from "./header/Header";
import CardsList from "./cards-list/CardsList";

export default function AllCardsScreen() {
  const styles = {
    body: "w-screen h-screen flex flex-row bg-indigo-500 touch-pan-y",
    outerWrapper: "flex flex-col bg-blue-500 p-3",
  };

  return (
    <div className={styles.body}>
      <EdgeIndicator />
      <div className={styles.outerWrapper}>
        <Header />
        <SearchForm />
        <CardsList />
      </div>
    </div>
  );
}
