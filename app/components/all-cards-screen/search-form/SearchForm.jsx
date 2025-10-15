import SearchButton from "./SearchButton";
import SearchFiltersButton from "./SearchFiltersButton";
import SearchInput from "./SearchInput";

export default function SearchForm() {
  const styles = {
    form: "fixed top-0 left-0 right-0 bg-blue-500 h-12 z-10 px-2 pt-2",
    searchBarWrapper: "h-full w-full flex gap-x-2",
  };

  return (
    <form data-component="SearchForm" className={styles.form}>
      <div className={styles.searchBarWrapper}>
        <SearchInput />
        <SearchButton />
        <SearchFiltersButton />
      </div>
    </form>
  );
}
