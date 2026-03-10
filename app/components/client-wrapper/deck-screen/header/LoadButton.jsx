export default function LoadButton() {
  const styles = {
    LoadButton: "bg-blue-500 text-white h-full aspect-square",
  };

  return (
    <button data-component="LoadButton" className={styles.LoadButton}>
      Load
    </button>
  );
}
