import SearchIcon from "./SearchIcon";
import Button from "@/app/components/ui/Button";

export default function SearchButton() {
  const styles = {
    wrapper: "h-full bg-green-500",
    button:
      "flex justify-center items-center aspect-square h-full bg-green-500",
  };

  const testing = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <Button onClick={testing} className={styles.button}>
        <SearchIcon />
      </Button>
    </div>
  );
}
