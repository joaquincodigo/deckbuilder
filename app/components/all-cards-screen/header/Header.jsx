import Heading from "./heading/Heading";
import SearchForm from "./search-form/SearchForm";

export default function Header() {
  const styles = {
    header: "px-3 pt-3",
  };

  return (
    <div className={styles.header}>
      <Heading />
      <SearchForm />
    </div>
  );
}
