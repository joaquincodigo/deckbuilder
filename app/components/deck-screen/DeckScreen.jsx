import DeckEdgeIndicator from "@/app/components/deck-screen/DeckEdgeIndicator";
import DeckSelector from "@/app/components/deck-screen/DeckSelector";
import DeckScreenHeader from "@/app/components/deck-screen/DeckScreenHeader";
import CardsList from "@/app/components/cards/CardsList";
import Modal from "@/app/components/modals/Modal";

export default function DeckScreen() {
  const styles = {
    screen: "w-screen h-screen flex flex-row bg-indigo-500 touch-pan-y",
    contentWrapper: "flex flex-col bg-amber-500 p-3",
  };

  return (
    <div className={styles.screen}>
      <div className={styles.contentWrapper}>
        <DeckScreenHeader />
        <DeckSelector />
        <CardsList />
      </div>
      <DeckEdgeIndicator />
    </div>
  );
}
