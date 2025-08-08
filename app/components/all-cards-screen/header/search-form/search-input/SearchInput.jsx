import SearchIcon from "./SearchIcon";
import Button from "@/app/components/ui/Button";

export default function SearchInput({ onChange }) {
  const styles = {
    wrapper: "flex w-full h-full",
    input: "w-full bg-white p-2 text-lg h-full",
    button:
      "flex justify-center items-center aspect-square h-full bg-green-500",
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
      <Button className={styles.button}>
        <SearchIcon />
      </Button>
    </div>
  );
}
