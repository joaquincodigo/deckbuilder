import SearchIcon from "./SearchIcon";

export default function SearchButton() {
  const styles = {
    button:
      "h-full aspect-square flex justify-center items-center  bg-btn-bg border-1 border-btn-border",
  };

  return (
    <button className={styles.button}>
      <SearchIcon />
    </button>
  );
}
