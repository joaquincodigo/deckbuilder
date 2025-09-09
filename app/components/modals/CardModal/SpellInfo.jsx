export default function SpellInfo({ card }) {

  const styles = {
    list: "bg-[#01233a] p-3 border-1 border-white/50",
    name: "px-1 mb-1 font-bold text-lg text-white bg-[radial-gradient(circle_at_30%_30%,#047862,#49b3a6)]",
    textbox: "bg-[#d3f2eb] border border-4 border-[#9c4710] p-1",
    type: "font-semibold text-white mb-1",
  };

  return (
    <ul className={styles.list}>
      <li className={styles.name}>{card.name}</li>
      <li className={styles.type}>
        {card.race !== "Normal"
          ? `[ ${card.race} - Spell ]`
          : `[ Spell ]`}
      </li>
      <div className={styles.textbox}>
        <li className={styles.description}>{card.desc}</li>
      </div>
    </ul>
  );
}
