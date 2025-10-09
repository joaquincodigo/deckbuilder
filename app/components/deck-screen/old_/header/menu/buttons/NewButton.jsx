import Button from "@/app/components/ui/Button";
import NewIcon from "./NewIcon";

export default function NewButton() {
  const styles = {
    container: "flex flex-col items-center",
    button: "bg-green-500 p-3 rounded",
    text: "font-bold text-white",
    wrapper: "flex flex-col",
  };

  return (
    <div className={styles.container}>
      <Button className={styles.button}>
        <div className={styles.wrapper}>
          <NewIcon />
        </div>
      </Button>
      <p>New</p>
    </div>
  );
}
