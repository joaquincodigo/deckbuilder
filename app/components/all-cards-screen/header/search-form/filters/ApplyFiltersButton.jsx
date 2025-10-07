import Button from "@/app/components/ui/Button";

export default function ApplyFiltersButton({ onClick }) {
  const styles = {
    button: "p-2 flex items-center text-white bg-btn-bg border-2 border-btn-border",
    text: "inline-block leading-none relative -top-[2px] font-bold",
  };
  return (
    <Button onClick={onClick} className={styles.button}>
      <span className={styles.text}>Apply filters</span>
    </Button>
  );
}
