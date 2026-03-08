import ApplyFiltersButton from "../apply-filters-button/ApplyFiltersButton";
import ResetFiltersButton from "../reset-filters-button/ResetFiltersButton";

export default function FiltersPanelFooter({ toggleFiltersPanel, handleResetFilters }) {
  const styles = {
    FiltersPanelFooter: "grid grid-cols-12 h-8 px-6",
  };

  return (
    <div
      data-component="FiltersPanelFooter"
      className={styles.FiltersPanelFooter}
    >
      <ResetFiltersButton onClick={handleResetFilters} />
      <ApplyFiltersButton />
    </div>
  );
}
