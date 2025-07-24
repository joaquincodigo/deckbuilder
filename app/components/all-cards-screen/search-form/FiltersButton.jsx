import * as motion from "motion/react-client";
import SearchFiltersIcon from "@/app/components/all-cards-screen/search-form/SearchFiltersIcon";

export default function FiltersButton({ onClick }) {
  const styles = {
    btn: "flex rounded w-fit bg-red-200 px-2 py-1 mb-3",
    icon: "w-7 h-7 me-1",
    btnLabel: "flex h-fit font-bold",
  };

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95, y: 2 }}
      className={styles.btn}
    >
      <SearchFiltersIcon className={styles.icon} />
      <span className={styles.btnLabel}>Filters</span>
    </motion.button>
  );
}
