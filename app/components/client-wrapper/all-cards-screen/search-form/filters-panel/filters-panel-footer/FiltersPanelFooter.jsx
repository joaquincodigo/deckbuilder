import ApplyFiltersButton from "../apply-filters-button/ApplyFiltersButton";
import ResetFiltersButton from "../reset-filters-button/ResetFiltersButton";

export default function FiltersPanelFooter({
  setIsFiltersPanelOpen,
  setSearchFormState,
  formRef,
}) {
  const styles = {
    FiltersPanelFooter: "grid grid-cols-12 h-12 px-6 gap-y-2 mb-4",
  };

  const handleFiltersReset = () => {
    setIsFiltersPanelOpen(false);
    formRef.current.reset();
    setSearchFormState({});
  };

  return (
    <div
      data-component="FiltersPanelFooter"
      className={styles.FiltersPanelFooter}
    >
      <ApplyFiltersButton onClick={() => setIsFiltersPanelOpen(false)} />
      <ResetFiltersButton onClick={handleFiltersReset} />
    </div>
  );
}
