import CardSelectorButton from "./CardSelectorButton";

export default function CardSelector() {
  const styles = {
    CardSelector:
      "z-90 border-4 border-white absolute top-0 left-0 w-full h-full flex flex-col p-2 gap-y-2",

      

  };

  return (
    <div data-component="CardSelector" className={styles.CardSelector}>
      <CardSelectorButton>
        <span>-O-</span>
        <span>View</span>
      </CardSelectorButton>

      <CardSelectorButton>
        <span>|_|</span>
        <span>Add to deck</span>
      </CardSelectorButton>
    </div>
  );
}

