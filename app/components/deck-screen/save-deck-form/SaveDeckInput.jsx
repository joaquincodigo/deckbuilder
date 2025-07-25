// import SearchIcon from "@/app/components/all-cards-screen/search-form/SearchIcon";

export default function SaveDeckInput({ onChange }) {
  const styles = {
    wrapper: "relative w-full me-3",
    input: "w-full bg-white py-2 pr-2 pl-10 text-lg",
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Deck name"
        className={styles.input}
        id="deck-save"
        name="deck-save"
      />
      {/* <SearchIcon /> */}
    </div>
  );
}
