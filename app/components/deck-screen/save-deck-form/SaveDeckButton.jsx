import SaveDeckIcon from "@/app/components/deck-screen/save-deck-form/SaveDeckIcon";
import Button from "@/app/components/ui/Button";

export default function SaveDeckButton() {
  const handleClick = () => {
    alert("Saved deck");
  };

  const styles = {
    btn: "bg-purple-800",
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
