import FiltersBadge from "./FiltersBadge";
import FiltersIcon from "./FiltersIcon";
FiltersIcon;

export default function SearchFiltersButton({ onClick }) {
  const styles = {
    btn: "relative h-full aspect-square flex items-center justify-center bg-btn-bg border-1 border-btn-border",
  };

  return (
    <button
      data-component="SearchFiltersButton"
      type="button"
      onMouseDown={onClick}
      className={styles.btn}
    >
      <FiltersIcon />
      <FiltersBadge />
    </button>
  );
}
