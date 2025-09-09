export default function TrapInfo({ card }) {
  const styles = {
    list: "bg-[#01233a] p-3 border-1 border-white/50",
    name: "px-1 mb-1 font-bold text-lg text-white bg-[radial-gradient(circle_at_30%_30%,#a51970,#803d65)]",
    textbox: "bg-[#e9c9de] border border-4 border-[#9c4710] p-1",
    type: "font-semibold text-white mb-1",
  };

  return (
    <ul className={styles.list}>
      <li className={styles.name}>{card.name}</li>
      <li className={styles.type}>
        {card.race !== "Normal"
          ? `[${card.race} - ${card.type}]`
          : `[ ${card.type} ]`}
      </li>
      <div className={styles.textbox}>
        <li className={styles.description}>{card.desc}</li>
      </div>
    </ul>
  );
}
