import Modal from "./Modal";
import Image from "next/image";

export default function CardModal({ card }) {
  const styles = {
    body: "bg-white z-90",
  };

  return (
    <Modal>
      <div className={styles.body}>
        <Image
          src={`/card_images/${card.id}.jpg`}
          alt="dummy card image"
          width={150}
          height={150}
        />
        <ul>
          <li>{card.name}</li>
          <li>{card.atk}</li>
          <li>{card.def}</li>
          <li>{card.ability}</li>
        </ul>
      </div>
    </Modal>
  );
}
