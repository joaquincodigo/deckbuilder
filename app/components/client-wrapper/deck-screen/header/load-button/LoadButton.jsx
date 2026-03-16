import LoadIcon from "./LoadIcon";

export default function LoadButton() {
  const styles = {
    LoadButton:
      "h-full aspect-square flex items-center justify-center bg-btn-bg border-1 border-btn-border text-white",
  };

  return (
    <button data-component="LoadButton" className={styles.LoadButton}>
      <LoadIcon />
    </button>
  );
}
