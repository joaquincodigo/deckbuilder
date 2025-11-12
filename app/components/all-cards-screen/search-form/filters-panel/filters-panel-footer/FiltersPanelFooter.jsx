import ApplyFiltersButton from "../apply-filters-button/ApplyFiltersButton";
import ResetFiltersButton from "../reset-filters-button/ResetFiltersButton";

export default function FiltersPanelFooter({ toggleFiltersPanel }) {
  const styles = {
    FiltersPanelFooter: "grid grid-cols-12 h-8 px-6",
  };

  return (
    <div
      data-component="FiltersPanelFooter"
      className={styles.FiltersPanelFooter}
    >
      <ResetFiltersButton onClick={toggleFiltersPanel} />
      <ApplyFiltersButton onClick={toggleFiltersPanel} />
    </div>
  );
}
