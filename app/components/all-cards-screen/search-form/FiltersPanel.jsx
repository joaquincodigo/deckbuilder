export default function FiltersPanel({
  isFiltersPanelOpen,
  toggleFiltersPanel,
}) {
  const styles = {
    panel: `fixed top-14 left-2 right-2 overflow-hidden bg-pink-500 transition-all ease-in-out duration-200 px-2 shadow-lg ${isFiltersPanelOpen ? "h-42 py-2" : "h-0"}`,
  };

  return (
    <div data-component="FiltersPanel" className={styles.panel}>
      <button>hello</button>
      <p>Your content</p>
      <p>Your content</p>
      <p>Your content</p>
    </div>
  );
}
