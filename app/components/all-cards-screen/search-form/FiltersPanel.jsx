export default function FiltersPanel(isFiltersPanelOpen) {
  const styles = {
    panel: `fixed top-14 left-2 right-2 overflow-hidden bg-pink-500 transition-[max-height] ease-out duration-[150ms]
    ${isFiltersPanelOpen ? "max-h-[500px] ease-in duration-[250ms]" : "max-h-0"}`,
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
