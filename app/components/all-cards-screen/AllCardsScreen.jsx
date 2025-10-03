import EdgeIndicator from "./edge-indicator/EdgeIndicator";
import Header from "./header/Header";
import CardsList from "./cards-list/CardsList";

export default function AllCardsScreen() {
  const styles = {
    body: "w-screen h-screen flex flex-row touch-pan-y",
    outerWrapper: "relative flex flex-col w-full",
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
