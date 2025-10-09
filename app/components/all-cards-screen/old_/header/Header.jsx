import Heading from "./heading/Heading";
import SearchForm from "./search-form/SearchForm";

export default function Header({setSearchFormData}) {
  const styles = {
    header: "w-full px-3 pt-3 bg-[#01233a] absolute top-0 right-0 z-10"
  };

  return (
    <div className={styles.header}>
      {/* <Heading /> */}
      <SearchForm setSearchFormData={setSearchFormData}/>
    </div>
  );
}
