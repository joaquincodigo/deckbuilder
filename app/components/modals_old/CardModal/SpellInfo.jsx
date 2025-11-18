export default function SpellInfo({ card }) {


  const styles = {
    name: "px-1.5 pb-[0.18rem] leading-none mb-1 text-3xl font-matrix-card-name text-white bg-[radial-gradient(circle_at_30%_30%,#047862,#49b3a6)]",
    type: "font-matrix-card-type text-white flex justify-end mb-1.5",
    textbox: "flex flex-col min-h-0 border border-4 border-[#9c4710] pt-[0.5] pb-1 px-1 shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] bg-[#d3f2eb]",
    description: "min-h-0 mb-1.5 overflow-y-auto flex-1 text-xl"
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
