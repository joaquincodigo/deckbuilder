import ViewButton from "./ViewButton";
import RemoveButton from "./RemoveButton";

export default function CardSelector() {
  const styles = {
    selector: "absolute -inset-2 border-black pointer-events-none bg-green-400/60 border-2 border-black",
  };
  return (
    <div className={styles.selector}>
      <ViewButton />
      <RemoveButton />
    </div>
  );
}
