import SaveIcon from "./SaveIcon";

export default function SaveButton() {
  const styles = {
    SaveButton:
      "h-full aspect-square flex items-center justify-center bg-btn-bg border-1 border-btn-border",
  };

  return (
    <button data-component="SaveButton" className={styles.SaveButton}>
      <SaveIcon />
    </button>
  );
}
