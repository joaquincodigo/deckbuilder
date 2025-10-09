import Header from "../header/Header";
import EdgeIndicator from "./edge-indicator/EdgeIndicator";

export default function DeckScreen() {
  const styles = {
    screen: "w-screen h-screen flex flex-row bg-indigo-500 touch-pan-y",
    contentWrapper: "flex flex-col bg-amber-500 w-full",
  };

  return (
    <div className={styles.screen}>
      <div className={styles.contentWrapper}>
        <Header />
        <p>I am deck list</p>
      </div>
      <EdgeIndicator />
    </div>
  );
}
