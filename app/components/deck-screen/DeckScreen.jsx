import DeckEdgeIndicator from "@/app/components/deck-screen/DeckEdgeIndicator";
import DeckSelector from "@/app/components/deck-screen/DeckSelector";
import DeckScreenHeader from "@/app/components/deck-screen/DeckScreenHeader";
import DeckCards from "@/app/components/deck-screen/DeckCards";
import Modal from "@/app/components/modals/Modal";

export default function DeckScreen() {
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  const random1to9 = () => {
    return Math.floor(Math.random() * 9) + 1;
  };
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const styles = {
    body: "w-screen h-screen flex flex-row bg-indigo-500 touch-pan-y",
    outerWrapper: "flex flex-col bg-amber-500 p-3",
    heading: "font-bold text-2xl",
    separator: "mb-3 te",
    selectLabel: "text-lg",
    select: "text-lg ms-3 bg-slate-200 p-1",
  };

  return (
    <div className={styles.body}>
      <div className={styles.outerWrapper}>
        <DeckScreenHeader />
        <DeckSelector />
        <DeckCards />
      </div>
      <DeckEdgeIndicator />
    </div>
  );
}
