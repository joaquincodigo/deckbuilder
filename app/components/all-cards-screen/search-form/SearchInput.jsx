import SearchIcon from "@/app/components/all-cards-screen/search-form/SearchIcon";

export default function SearchInput() {
  const styles = {
    inputWrapper: "relative w-full mb-3",
    input: "w-full bg-white py-2 pl-10 pr-2 text-lg",
  };
  return (
    <form>
      <div className={styles.inputWrapper}>
        <input
          type="search"
          placeholder="Search"
          className={styles.input}
          id="card-search"
          name="card-search"
        />
        <SearchIcon />
      </div>
    </form>
  );
}
