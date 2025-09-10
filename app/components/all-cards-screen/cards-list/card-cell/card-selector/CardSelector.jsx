import ShowInfoButton from "./ShowInfoButton";
import RemoveButton from "./RemoveButton";

export default function CardSelector({ onShowInfo, onRemoveFromDeck }) {
  const styles = {
    selector:
      "absolute -inset-1 flex flex-col justify-center gap-y-1.5 p-1.5 border-black bg-green-400/60 border-2 border-black z-50",
  };

  return (
    <div className={styles.selector}>
      <ShowInfoButton onClick={onShowInfo} />
      <RemoveButton onClick={onRemoveFromDeck} />
    </div>
  );
}
