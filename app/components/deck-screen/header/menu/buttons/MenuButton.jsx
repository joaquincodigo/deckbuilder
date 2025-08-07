import MenuIcon from "./MenuIcon";
import Button from "@/app/components/ui/Button";

export default function MenuButton({ onClick }) {
  const styles = {
    button:
      "flex justify-center items-center bg-green-500 w-10 h-10 p-1 rounded-full",
  };

  return (
    <Button onClick={onClick} className={styles.button}>
      <MenuIcon />
    </Button>
  );
}
