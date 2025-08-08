import EdgeIndicator from "./edge-indicator/EdgeIndicator";
import Header from "./header/Header";
import CardsList from "./cards-list/CardsList";

export default function AllCardsScreen() {
  const styles = {
    body: "w-screen h-screen flex flex-row bg-indigo-500 touch-pan-y",
    outerWrapper: "flex flex-col bg-blue-500 p-3 w-full",
  };

  return (
    <div className={styles.body}>
      <EdgeIndicator />
      <div className={styles.outerWrapper}>
        <Header />
        <CardsList />
      </div>
    </div>
  );
}
