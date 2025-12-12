export default function SearchInput() {

  const styles = {
    searchInput: "flex-1 p-2 text-lg focus:outline-none focus:ring-0",
  };

  return (
    <input
      data-component="SearchInput"
      type="search"
      placeholder="Search cards"
      id="query"
      name="query"
      className={styles.searchInput}
    />
  );
}
