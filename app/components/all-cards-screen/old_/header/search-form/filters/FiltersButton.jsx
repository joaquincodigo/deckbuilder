import Button from "@/app/components/ui/Button";
import FiltersIcon from "./FiltersIcon";
FiltersIcon;

export default function FiltersButton({ onClick }) {
  const styles = {
    btn: "flex items-center justifyt-center px-2 bg-btn-bg border-2 border-btn-border text-white font-bold",
  };

  return (
    <Button onClick={onClick} type="submit" className={styles.btn}>
      <FiltersIcon /> <span>Filters</span>
    </Button>
  );
}
