import Button from "@/app/components/ui/Button";
import MoreIcon from "./MoreIcon";

export default function MoreButton() {
  const styles = {
    container: "flex flex-col items-center touch-none",
    button: "bg-purple-700 p-3 rounded",
    text: "font-bold text-white",
    wrapper: "flex flex-col",
  };

  return (
    <div className={styles.container}>
      <Button className={styles.button}>
        <div className={styles.wrapper}>
          <MoreIcon />
        </div>
      </Button>
      <p>More</p>
    </div>
  );
}
