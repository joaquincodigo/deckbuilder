import Image from "next/image";
import Modal from "./Modal";

export default function CardModal({ card, onBackdropClick }) {
  const styles = {
    CardModal: "p-3 ",
  };

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <Image
        className={styles.cardModalImage}
        src={`/card_images/${card.id}.jpg`}
        alt={card.name}
        width={590}
        height={860}
        style={{ width: "100%", height: "auto" }}
      />
    </Modal>
  );
}
