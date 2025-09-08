export default function MonsterInfo({ card }) {
  const styles = {
    list: "bg-[radial-gradient(circle_at_30%_30%,#c4845a,#633b1a)] px-3 pt-1 pb-3",
    name: "font-bold text-lg",
    textbox: "bg-orange-200 border border-4 border-amber-600 p-1",
    type: "font-semibold",
    description: `overflow-scroll mb-1.5 ${
      card.type === "Normal Monster" ? "italic" : ""
    }`,
    separator: "border-1",
    stats: "flex justify-end font-bold gap-x-3",
  };
  return (
    <ul className={styles.list}>
      <li className={styles.name}>{card.name}</li>
      <li>
        Level {card.level} - {card.attribute}
      </li>
      <div className={styles.textbox}>
        <li className={styles.type}>
          {card.race} - {card.type}
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
