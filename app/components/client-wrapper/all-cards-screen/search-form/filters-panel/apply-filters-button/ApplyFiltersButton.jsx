export default function ApplyFiltersButton() {
  const styles = {
    ApplyFiltersButton:
      "col-start-8 col-end-13 text-center text-white bg-btn-bg border-1 px-2 border-btn-border",
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
