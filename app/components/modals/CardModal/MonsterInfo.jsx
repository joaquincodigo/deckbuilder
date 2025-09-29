import Image from "next/image";

export default function MonsterInfo({ card }) {
  const nameGradients = {
    "Normal Monster": "bg-[radial-gradient(circle_at_30%_30%,#cbac6b,#b4843c)]",
    "Effect Monster": "bg-[radial-gradient(circle_at_30%_30%,#c5845a,#a66330)]",
    "Flip Effect Monster":
      "bg-[radial-gradient(circle_at_30%_30%,#c5845a,#a66330)]",
    "Effect Monster": "bg-[radial-gradient(circle_at_30%_30%,#c5845a,#a66330)]",
    "Ritual Monster": "bg-[radial-gradient(circle_at_30%_30%,#6c94c6,#4464b4)]",
    "Ritual Effect Monster":
      "bg-[radial-gradient(circle_at_30%_30%,#6c94c6,#4464b4)]",
    "Fusion Monster": "bg-[radial-gradient(circle_at_30%_30%,#975da4,#742c84)]",
    "Toon Monster": "bg-[radial-gradient(circle_at_30%_30%,#c5845a,#a66330)]",
  };

  const textboxBackgrounds = {
    "Normal Monster": "bg-[#f2ebdc]",
    "Effect Monster": "bg-[#ecdccc]",
    "Flip Effect Monster": "bg-[#ecdccc]",
    "Ritual Monster": "bg-[#dce3f1]",
    "Ritual Effect Monster": "bg-[#dce3f1]",
    "Fusion Monster": "bg-[#e4d0e7]",
    "Toon Monster": "bg-[#ecdccc]",
  };

  const styles = {
    name: `px-1.5 pb-[0.18rem] leading-none mb-1 text-3xl font-matrix-card-name ${nameGradients[card.type]}`,
    levelAndAttributeContainer: "flex text-white mb-1 gap-x-1 justify-end",
    level: "flex gap-x-0.5 items-center font-matrix-card-type",
    textbox: `flex flex-col min-h-0 border border-4 border-[#9c4710] pt-[0.5] pb-1 px-1 shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ${
      textboxBackgrounds[card.type]
    }`,
    type: "font-matrix-card-type",
    description: `min-h-0 mb-1.5 overflow-y-auto flex-1 text-xl ${
      card.type === "Normal Monster" ? "font-matrix-italic" : ""
    }`,
    separator: "border-1",
    stats: "flex justify-end font-bold gap-x-3 shrink-0 font-matrix-card-type text-sm",
  };

  return (
    <>
      <p className={styles.name}>{card.name}</p>
      <div className={styles.levelAndAttributeContainer}>
        <div className={styles.level}>
          <Image
            src={`/ui/star_icon.svg`}
            alt="Star Level Icon"
            width={18}
            height={18}
          />
          <span>{card.level}</span>
        </div>

        <span>{card.attribute}</span>
      </div>

      <div className={styles.textbox}>
        <p className={styles.type}>
          [{card.race}/{card.type}]
        </p>
        <p className={styles.description}>{card.desc}</p>
        <hr className={styles.separator} />
        <div className={styles.stats}>
          <span>ATK/{card.atk}</span>
          <span>DEF/{card.def}</span>
        </div>
      </div>
    </>
  );
}
