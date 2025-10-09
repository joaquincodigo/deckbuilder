import ViewCardInfoButton from "./view-card-info-button/ViewCardInfoButton";
import AddToDeckButton from "./add-to-deck-button/AddToDeckButton";

export default function CardSelector({ onShowInfo, addToDeck }) {
  const styles = {
    selector:
      "absolute -inset-1 flex flex-col justify-center gap-y-2 p-2 z-50 bg-[#01233a]/60 border-green-500",
  };

  return (
    <div className={styles.selector}>
      <ViewCardInfoButton onClick={onShowInfo} />
      <AddToDeckButton onClick={addToDeck} />
    </div>
  );
}
