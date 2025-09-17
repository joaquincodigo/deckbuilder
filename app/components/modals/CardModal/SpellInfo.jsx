export default function SpellInfo({ card }) {
  const styles = {
    name: "px-1 mb-1 font-bold text-lg text-white bg-[radial-gradient(circle_at_30%_30%,#047862,#49b3a6)]",
    textbox:
      "bg-[#d3f2eb] border border-4 border-[#9c4710] p-1 shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ",
    type: "pe-3 text-right w-full font-semibold text-white mb-1",
  };

  return (
    <>
      <p className={styles.name}>{card.name}</p>
      <p className={styles.type}>
        {card.race !== "Normal" ? `[ Spell - ${card.race} ]` : `[ Spell ]`}
      </p>
      <div className={styles.textbox}>
        <p className={styles.description}>{card.desc}</p>
      </div>
    </>
  );
}
