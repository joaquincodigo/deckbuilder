import SaveDeckIcon from "@/app/components/deck-screen/save-deck-form/SaveDeckIcon";
import Button from "@/app/components/ui/Button";

export default function SaveDeckButton() {
  const styles = {
    btn: "bg-purple-800",
  };

  const handleClick = () => {
    return;
  };

  return (
    <Button
      icon={SaveDeckIcon}
      onClick={handleClick}
      className={styles.btn}
      type="submit"
    />
  );
}
