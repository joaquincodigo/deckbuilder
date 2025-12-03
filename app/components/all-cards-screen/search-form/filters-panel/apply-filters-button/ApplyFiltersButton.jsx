export default function ApplyFiltersButton() {
  const styles = {
    ApplyFiltersButton:
      "text-center col-start-9 col-end-13 h-full text-white bg-btn-bg border-1 px-2 border-btn-border",
  };

  return (
    <button
      type="submit"
      data-component="ApplyFiltersButton"
      className={styles.ApplyFiltersButton}
    >
      Apply filters
    </button>
  );
}
