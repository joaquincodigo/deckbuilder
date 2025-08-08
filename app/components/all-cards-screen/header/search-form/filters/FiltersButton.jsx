import Button from "@/app/components/ui/Button";
import FiltersIcon from "./FiltersIcon";
FiltersIcon;

export default function FiltersButton({ onClick }) {
  const styles = {
    btn: "flex p-2 bg-red-200",
  };

  return (
    <Button onClick={onClick} type="submit" className={styles.btn}>
      <FiltersIcon /> <span>Filters</span>
    </Button>
  );
}
