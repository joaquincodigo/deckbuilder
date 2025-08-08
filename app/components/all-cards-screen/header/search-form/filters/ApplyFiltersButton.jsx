import Button from "@/app/components/ui/Button";

export default function ApplyFiltersButton({ onClick }) {
  const styles = {
    button: "p-1.5 bg-blue-500 text-white",
  };
  return (
    <Button onClick={onClick} className={styles.button}>
      <p>Apply filters</p>
    </Button>
  );
}
