import FiltersIcon from "./FiltersIcon";
FiltersIcon;

export default function SearchFiltersButton({ onClick }) {
  const styles = {
    btn: "h-full aspect-square flex items-center justify-center bg-btn-bg border-1 border-btn-border",
  };

  return (
    <button
      data-component="SearchFiltersButton"
      onMouseDown={onClick}
      type="submit"
      className={styles.btn}
    >
      <FiltersIcon />
    </button>
  );
}
