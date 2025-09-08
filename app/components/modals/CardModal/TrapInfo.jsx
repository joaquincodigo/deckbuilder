export default function TrapInfo({ card }) {
  return (
    <ul>
      <li>{card.name}</li>
      <li>{card.type}</li>
      <li>{card.desc}</li>
    </ul>
  );
}
