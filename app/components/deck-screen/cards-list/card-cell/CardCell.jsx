import Card from "@/app/components/ui/Card";
import CardSelector from "./card-selector/CardSelector";

export default function CardCell({ card, isSelected, onSelect }) {
  const styles = {
    cell: "relative overflow-visible",
  };

  return (
    <div className={styles.cell} onClick={onSelect}>
      <Card
        name={card.name}
        atk={card.atk}
        def={card.defense}
        ability={card.ability}
      />
      {isSelected && <CardSelector />}
    </div>
  );
}
