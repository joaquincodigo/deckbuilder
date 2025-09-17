export default function TrapInfo({ card }) {
  const styles = {
    name: "px-1 mb-1 font-bold text-lg text-white bg-[radial-gradient(circle_at_30%_30%,#803d65,#a51970)]",
    textbox:
      "bg-[#e9c9de] border border-4 border-[#9c4710] p-1  shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]",
    type: "font-semibold text-white mb-1",
  };

  return (
    <>
      <p className={styles.name}>{card.name}</p>
      <p className={styles.type}>
        {card.race !== "Normal"
          ? `[${card.race} - ${card.type}]`
          : `[ ${card.type} ]`}
      </p>
      <div className={styles.textbox}>
        <p className={styles.description}>{card.desc}</p>
      </div>
    </>
  );
}
