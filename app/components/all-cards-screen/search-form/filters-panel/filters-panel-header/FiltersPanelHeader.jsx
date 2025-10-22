import FiltersPanelHeaderButton from "./FiltersPanelHeaderButton";

export default function FiltersPanelHeader({ onClick, setFiltersSection }) {
  const styles = {
    FiltersPanelHeader: "w-full flex justify-around py-2",
  };

  return (
    <div
      data-component="FiltersPanelHeader"
      className={styles.FiltersPanelHeader}
    >
      <FiltersPanelHeaderButton onClick={() => setFiltersSection("monster")} />
      <FiltersPanelHeaderButton onClick={() => setFiltersSection("spell")} />
      <FiltersPanelHeaderButton onClick={() => setFiltersSection("trap")} />
    </div>
  );
}
