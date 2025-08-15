export default function CardCell({ card, isSelected, onSelect }) {
  return (
    <div className="relative overflow-visible" onClick={onSelect}>
      <div className="p-4 bg-white border">{card.name}</div>
      {isSelected && (
        <div className="absolute -inset-2 border-black border-8 pointer-events-none" />
      )}
    </div>
  );
}
