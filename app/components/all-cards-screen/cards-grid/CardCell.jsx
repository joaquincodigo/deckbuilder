export default function CardCell({
  columnIndex,
  rowIndex,
  style,
  columnCount,
  currentCards,
}) {
  const cardIndex = rowIndex * columnCount + columnIndex;
  const card = currentCards[cardIndex];

  const styles = {
    CardCell: "bg-green-300 w-6 h-8",
  };

  if (!card) return null;
  return (
    <div data-component="CardCell" style={style} className={styles.CardCell}>
      {card.name}
    </div>
  );
}
