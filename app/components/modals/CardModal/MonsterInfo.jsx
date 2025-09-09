export default function MonsterInfo({ card }) {
  const nameGradients = {
    "Normal Monster": "bg-[radial-gradient(circle_at_30%_30%,#cbac6b,#b4843c)]",
    "Effect Monster": "bg-[radial-gradient(circle_at_30%_30%,#c5845a,#a66330)]",
    // ToDo: Ritual
    // ToDo: Fusion
    // ToDo: Token
  };

  const styles = {
    list: "bg-[#01233a] p-3 border-1 border-white/50",
    name: `px-1 mb-1 font-bold text-lg ${nameGradients[card.type]}`,
    levelAndAttribute: "text-white mb-1",
    textbox: "bg-orange-200 border border-4 border-[#9c4710] p-1",
    type: "font-semibold",
    description: `max-h-64 overflow-scroll mb-1.5 ${
      card.type === "Normal Monster" ? "italic" : ""
    }`,
    separator: "border-1",
    stats: "flex justify-end font-bold gap-x-3",
  };
  return (
    <ul className={styles.list}>
      <li className={styles.name}>{card.name}</li>
      <li className={styles.levelAndAttribute}>
        Level {card.level} - {card.attribute}
      </li>
      <div className={styles.textbox}>
        <li className={styles.type}>
          [{card.race} / {card.type}]
        </li>
        <li className={styles.description}>{card.desc}</li>
        <hr className={styles.separator} />
        <li className={styles.stats}>
          <span>ATK/{card.atk}</span>
          <span>DEF/{card.def}</span>
        </li>
      </div>
    </ul>
  );
}
