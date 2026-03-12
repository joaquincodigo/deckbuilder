export default function SearchInput({ searchFormState, formRef }) {
  const styles = {
    searchInput: "flex-1 p-2 text-lg focus:outline-none focus:ring-0",
  };

  const handleChange = (e) => {
    const inputText = e.target.value;
    setSearchFormState((prev) => ({
      ...prev,
      query: inputText,
    }));
  };

  return (
    <input
      autoComplete="off"
      data-component="SearchInput"
      type="search"
      placeholder="Search cards"
      id="query"
      name="query"
      className={styles.searchInput}
    />
  );
}
