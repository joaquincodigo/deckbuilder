import NewButton from "./buttons/NewButton";
import LoadButton from "./buttons/LoadButton";
import MoreButton from "./buttons/MoreButton";
import SaveButton from "./buttons/SaveButton";
import DeckName from "./deck-name/DeckName";

export default function DeckScreenHeader() {
  const styles = {
    heading: "font-bold text-2xl",
    separator: "mb-3",
    buttonsContainer: "flex w-100% gap-x-3 justify-around mb-3",
  };
  return (
    <>
      <p className={styles.heading}>Deck</p>
      <hr className={styles.separator} />
      <div className={styles.buttonsContainer}>
        <NewButton />
        <SaveButton />
        <LoadButton />
        <MoreButton />
      </div>
      <DeckName />
    </>
  );
}
