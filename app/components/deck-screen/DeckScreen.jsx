import Header from "./header/Header";
import CardsList from "./cards-list/CardsList";
import EdgeIndicator from "./edge-indicator/EdgeIndicator";

export default function DeckScreen() {
  const styles = {
    screen: "w-screen h-screen flex flex-row bg-indigo-500 touch-pan-y",
    contentWrapper: "flex flex-col bg-amber-500 p-3 w-full",
  };

  return (
    <div className={styles.screen}>
      <div className={styles.contentWrapper}>
        <Header />
        <CardsList />
      </div>
      <EdgeIndicator />
    </div>
  );
}
