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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <span>View</span>
      </CardSelectorButton>

      <CardSelectorButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-6"
        >
          <path

            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

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
