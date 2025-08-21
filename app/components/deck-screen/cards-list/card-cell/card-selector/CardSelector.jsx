import ViewButton from "./ViewButton";
import RemoveButton from "./RemoveButton";

export default function CardSelector() {

  const styles = {
    selector: "absolute -inset-1 flex flex-col justify-center gap-y-1.5 p-1.5 border-black bg-green-400/60 border-2 border-black z-90",
  };

  return (
    <div className={styles.selector}>
      <ViewButton />
      <RemoveButton />
    </div>
  );
}
