import SearchIcon from "@/app/components/all-cards-screen/header/search-form/SearchIcon";

export default function SearchInput({onChange}) {
  const styles = {
    wrapper: "relative w-full mb-3",
    input: "w-full bg-white py-2 pl-10 pr-2 text-lg",
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        placeholder="Search"
        className={styles.input}
        id="card-search"
        name="card-search"
        onChange={onChange}
      />
      <SearchIcon />
    </div>
  );
}
