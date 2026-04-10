import LoadIcon from "./LoadDeckIcon";

export default function LoadDeckButton({ onClick }) {
  const styles = {
    LoadButton:
      "h-full aspect-square flex items-center justify-center bg-btn-bg border-1 border-btn-border text-white",
  };

  return (
    <button
      onMouseDown={onClick}
      data-component="LoadButton"
      className={styles.LoadButton}
    >
      <LoadIcon />
    </button>
  );
}
