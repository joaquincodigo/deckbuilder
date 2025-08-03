import Button from "@/app/components/ui/Button";
import SaveDeckIcon from "./SaveIcon";

export default function SaveButton() {
  const styles = {
    container: "flex flex-col items-center",
    button: "bg-cyan-500 p-3 rounded",
    text: "font-bold text-white",
    wrapper: "flex flex-col",
  };

  return (
    <div className={styles.container}>
      <Button className={styles.button}>
        <div className={styles.wrapper}>
          <SaveDeckIcon />
        </div>
      </Button>
      <p>Save</p>
    </div>
  );
}
