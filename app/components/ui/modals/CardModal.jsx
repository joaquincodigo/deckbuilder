import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import Spinner from "../Spinner";

export default function CardModal({ card, onBackdropClick }) {
  const [isLoading, setIsLoading] = useState(true);

  const styles = {
    imgWrapper: "h-screen w-screen flex items-center justify-center aspect-[59/86] relative max-w-[622px] ",
    highResImg: `${isLoading ? "invisible" : ""}`,
    loadingWrapper: "flex flex-col items-center justify-center gap-y-3 pb-20 w-full h-full",
    loadingTxt: "text-white text-xl",
  };
  return (
    <Modal onBackdropClick={onBackdropClick}>

      {/* LOADING */}
      {isLoading && (
        <div className={styles.loadingWrapper}>
          <span className={styles.loadingTxt}>Loading card image...</span>
          <Spinner color="white" size={37} />
        </div>
      )}

      <div className={styles.imgWrapper}>
        {/* HIGH RES */}
        <Image
          data-component="High res image"
          onLoad={() => setIsLoading(false)} 
          className={styles.highResImg}
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
