import Modal from "../Modal";
import Image from "next/image";
import MonsterInfo from "./MonsterInfo";
import SpellInfo from "./SpellInfo";
import TrapInfo from "./TrapInfo";

export default function CardModal({
  isOpen,
  card,
  onBodyClick,
  onBackdropClick,
}) {
  const styles = {
    body: "z-90 shadow-lg h-screen flex flex-col p-3",
    imageContainer: "aspect-[59/86] relative mb-3 shadow-lg shadow-black/80",
    image: "object-contain",
    infoContainer: "flex flex-col min-h-0 flex-1 bg-[#01233a] p-3 border-1 border-white/50",
  };

  if (!card) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onBackdropClick={onBackdropClick}>
      <div onClick={onBodyClick} className={styles.body}>
        <div className={styles.imageContainer}>
          <Image
            src={`/card_images/${card.id}.jpg`}
            alt="dummy card image"
            fill
            className={styles.image}
            onClick={onBackdropClick}
          />
        </div>

        <div className={styles.infoContainer}>
          {card.type.includes("Monster") && <MonsterInfo card={card} />}
          {card.type.includes("Spell") && <SpellInfo card={card} />}
          {card.type.includes("Trap") && <TrapInfo card={card} />}
        </div>
      </div>
    </Modal>
  );
}
