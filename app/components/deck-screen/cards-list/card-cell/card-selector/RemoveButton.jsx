import Button from "@/app/components/ui/Button";

export default function RemoveButton({ onClick }) {
  const styles = {
    button: "bg-orange-500 font-bold rounded z-50",
  };
  return (
    <Button onClick={onClick} className={styles.button}>
      Remove from deck
    </Button>
  );
}
