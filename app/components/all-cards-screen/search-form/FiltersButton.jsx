import Button from "@/app/components/ui/Button"
import SearchFiltersIcon from "@/app/components/all-cards-screen/search-form/SearchFiltersIcon";

export default function FiltersButton({ onClick }) {
  const styles = {
    btn: "bg-red-200",
  };

  return (
    <Button
      label="Filters"
      icon={SearchFiltersIcon}
      onClick={onClick}
      className={styles.btn}
      type="submit"
    />
  );
}
