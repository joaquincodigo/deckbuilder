import LoadButton from "./LoadButton";
import SaveButton from "./SaveButton";

export default function Header({ deck }) {
  const styles = {
    Header:
      "h-12 w-full flex flex-shrink-0 justify-between gap-x-2 bg-gray-500",
    buttonsContainer: "flex gap-x-2 bg-cyan-400",
    nameContainer: "flex items-center bg-green-600",
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
