import LoadButton from "./load-button/LoadButton";
import NewButton from "./new-button/NewButton";
import SaveButton from "./save-button/SaveButton";

export default function Header({ deck }) {
  const styles = {
    Header: "h-12 w-full flex flex-shrink-0 justify-between gap-x-2 text-lg",
    buttonsContainer: "flex gap-x-2",
    nameContainer: "flex items-center",
  };

  return (
    <div data-component="Header" className={styles.Header}>
      <div className={styles.nameContainer}>
        <h1>{deck.name}</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <NewButton />
        <LoadButton />
        <SaveButton />
      </div>
    </div>
  );
}
