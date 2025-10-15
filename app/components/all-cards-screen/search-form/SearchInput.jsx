export default function SearchInput() {

  const styles = {
    searchInput: "flex-1 p-2 bg-white text-lg focus:outline-none focus:ring-0",
  };

  return (
    <input
      data-component="SearchInput"
      type="search"
      placeholder="Search cards"
      id="allCardsQuery"
      name="allCardsQuery"
      className={styles.searchInput}
    />
  );
}
