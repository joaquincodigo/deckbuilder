import SearchIcon from "./SearchIcon";
import Button from "@/app/components/ui/Button";

export default function SearchButton() {
  const styles = {
    wrapper: "h-full bg-green-500",
    button: "flex justify-center items-center aspect-square h-full bg-btn-bg",
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <SearchIcon />
      </button>
    </div>
  );
}
