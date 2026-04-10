import NewIcon from "./NewDeckIcon";

export default function NewDeckButton({ onClick }) {
  const styles = {
    NewDeckButton:
      "h-full aspect-square flex items-center justify-center bg-btn-bg border-1 border-btn-border",
  };

  return (
    <button
      onMouseDown={onClick}
      data-component="NewDeckButton"
      className={styles.NewDeckButton}
    >
      <NewIcon />
    </button>
  );
}
