import { useState } from "react";
import CardSelectorButton from "./CardSelectorButton";
import CardModal from "@/app/components/modals/CardModal";

export default function CardSelector({ card }) {
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);

  const styles = {
    CardSelector:
      "z-90 border-4 border-white absolute top-0 left-0 w-full h-full flex flex-col p-2 gap-y-2",
  };

  return (
    <div data-component="CardSelector" className={styles.CardSelector}>
      <CardSelectorButton onClick={() => setIsCardModalVisible(true)}>
        <span>-O-</span>
        <span>View</span>
      </CardSelectorButton>

      <CardSelectorButton>
        <span>|_|</span>
        <span>Add to deck</span>
      </CardSelectorButton>

      {isCardModalVisible && (
        <CardModal
          card={card}
          onBackdropClick={() => setIsCardModalVisible(false)}
        />
      )}
    </div>
  );
}
