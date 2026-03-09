export default function ResetFiltersButton({ onClick }) {
  const styles = {
    ResetFiltersButton:
      "col-start-8 col-end-13 text-center bg-red-800 border-1 border-red-300 px-2",
  };

  return (
    <button
      type="button"
      onMouseDown={onClick}
      data-component="ResetFiltersButton"
      className={styles.ResetFiltersButton}
    >
      Reset filters
    </button>
  );
}
