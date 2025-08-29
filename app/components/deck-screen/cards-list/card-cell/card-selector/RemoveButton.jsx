import Button from "@/app/components/ui/Button";

export default function RemoveButton() {
  const styles = {
    button: "bg-orange-500 font-bold rounded z-50",
  };
  return <Button className={styles.button}>Remove from deck</Button>;
}
