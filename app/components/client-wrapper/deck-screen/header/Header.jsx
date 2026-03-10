import LoadButton from "./LoadButton";
import SaveButton from "./SaveButton";

export default function Header({ deck }) {
  const styles = {
    Header:
      "fixed inset-0 h-14 flex justify-between bg-orange-500 px-2 pt-2 gap-x-2",
    buttonsContainer: "flex gap-x-2",
    nameContainer: "flex items-center",
  };

  return (
    <div data-component="Header" className={styles.Header}>
      <div className={styles.nameContainer}>
        <h1>{deck.name}</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <LoadButton />
        <SaveButton />
      </div>
    </div>
  );
}
