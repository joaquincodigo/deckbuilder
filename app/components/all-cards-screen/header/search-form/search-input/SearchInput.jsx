import SearchButton from "./SearchButton";

export default function SearchInput({ onChange }) {
  const styles = {
    wrapper: "flex w-full h-full",
    input: "w-full bg-white p-2 text-lg h-full",
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        placeholder="Search cards"
        className={styles.input}
        id="card-search"
        name="card-search"
        onChange={onChange}
      />
    <SearchButton/> 
    </div>
  );
}
