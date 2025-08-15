export default function CardCell({ card, isSelected, onSelect }) {
  return (
    <div className="relative overflow-visible" onClick={onSelect}>
      <div className="p-4 bg-white border w-14 h-28">{card.name}</div>
      {isSelected && (
        <div className="absolute -inset-2 border-2 border-red-500 pointer-events-none" />
      )}
    </div>
  );
}
