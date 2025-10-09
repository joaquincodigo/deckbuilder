import Button from "@/app/components/ui/Button";
import LoadIcon from "./LoadIcon";

export default function LoadButton() {
  const styles = {
    container: "flex flex-col items-center",
    button: "bg-blue-500 p-3 rounded",
    text: "font-bold text-white",
    wrapper: "flex flex-col",
  };

  return (
    <div className={styles.container}>
      <Button className={styles.button}>
        <div className={styles.wrapper}>
          <LoadIcon />
        </div>
      </Button>
      <p>Load</p>
    </div>
  );
}
