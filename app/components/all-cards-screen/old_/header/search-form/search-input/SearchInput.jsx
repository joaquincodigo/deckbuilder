import SearchButton from "./SearchButton";

export default function SearchInput() {
  const styles = {
    wrapper: "flex w-full h-full focus-within:outline focus-within:outline-2 focus-within:outline-btn-border",
    input:
      "w-full bg-white p-2 text-lg h-full focus:outline-none focus:ring-0 focus:border-blue-500",
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        placeholder="Search cards"
        className={styles.input}
        id="allCardsQuery"
        name="allCardsQuery"
      />
      <SearchButton />
    </div>
  );
}
