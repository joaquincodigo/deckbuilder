export default function ResetFiltersButton({ onClick }) {
  const styles = {
    ResetFiltersButton:
      "text-center col-start-4 col-end-8 h-full bg-red-800 border-1 border-red-300 px-2",
  };

  return (
    <div
      data-component="ResetFiltersButton"
      className={styles.ResetFiltersButton}
      onMouseDown={onClick}
    >
      Reset filters
    </div>
  );
}
