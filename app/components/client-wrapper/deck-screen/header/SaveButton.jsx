export default function SaveButton() {
  const styles = {
    SaveButton: "bg-blue-500 text-white h-full aspect-square",
  };

  return (
    <button data-component="SaveButton" className={styles.SaveButton}>
      Save
    </button>
  );
}
