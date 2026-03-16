import NewIcon from "./NewIcon";

export default function NewButton() {
  const styles = {
    NewButton:
      "h-full aspect-square flex items-center justify-center bg-btn-bg border-1 border-btn-border",
  };

  return (
    <button data-component="NewButton" className={styles.NewButton}>
      <NewIcon />
    </button>
  );
}
