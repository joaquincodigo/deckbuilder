import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import Spinner from "../Spinner";

export default function CardModal({ card, onBackdropClick }) {
  const [isLoading, setIsLoading] = useState(true);

  const styles = {
    CardModal: "p-3 ",
    wrapper: "w-full aspect-[59/86] relative",
  };

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <div className={styles.wrapper}>
        {isLoading && (
          <Image
            onLoad={() => setIsLoading(false)}
            className={styles.cardModalImage}
            src={`/card_images/low-res/${card.id}.jpg`}
            alt={card.name}
            width={590}
            height={860}
            style={{ width: "100%", height: "auto" }}
          />
        )}

        <Image
          onLoad={() => setIsLoading(false)}
          className={styles.cardModalImage}
          src={`/card_images/${card.id}.jpg`}
          alt={card.name}
          width={590}
          height={860}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </Modal>
  );
}
