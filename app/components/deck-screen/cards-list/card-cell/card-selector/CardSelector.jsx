import ViewButton from "./ViewButton";
import RemoveButton from "./RemoveButton";

export default function CardSelector({ card }) {
  const styles = {
    selector:
      "absolute -inset-1 flex flex-col justify-center gap-y-1.5 p-1.5 border-black bg-green-400/60 border-2 border-black z-50",
  };

  return (
    <div className={styles.selector}>
      <ViewButton card={card} />
      <RemoveButton />
    </div>
  );
}
