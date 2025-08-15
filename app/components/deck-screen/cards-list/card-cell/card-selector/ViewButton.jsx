import Button from "@/app/components/ui/Button";

export default function ViewButton() {
  const styles = {
    button: "bg-blue-500 font-bold rounded text-white",
  };
  return <Button className={styles.button}>View</Button>;
}
