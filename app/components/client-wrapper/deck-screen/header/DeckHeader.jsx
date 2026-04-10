import { useState } from "react";
import LoadDeckButton from "./load-deck-button/LoadDeckButton";
import NewDeckButton from "./new-deck-button/NewDeckButton";
import SaveButton from "./save-button/SaveButton";
import Modal from "@/app/components/ui/modals/Modal";
import NewDeckModal from "./new-deck-modal/NewDeckModal";
import LoadDeckModal from "./load-deck-modal/LoadDeckModal";

export default function Header({ deck, premadeDecks }) {
  const styles = {
    Header: "h-12 w-full flex flex-shrink-0 justify-between gap-x-2 text-lg",
    buttonsContainer: "flex gap-x-2",
    nameContainer: "flex items-center",
  };

  const [isNewDeckModalOpen, setIsNewDeckModalOpen] = useState(false);
  const [isLoadDeckModalOpen, setIsLoadDeckModalOpen] = useState(false);

  const handleLoadDeck = () => {
    alert("Load Deck");
  };

  const handleSaveDeck = () => {
    alert("Save Deck");
  };

  return (
    <div data-component="Header" className={styles.Header}>
      <div className={styles.nameContainer}>
        <h1>{deck.name}</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <NewDeckButton onClick={() => setIsNewDeckModalOpen(true)} />

        <LoadDeckButton onClick={() => setIsLoadDeckModalOpen(true)} />
        <SaveButton onClick={handleSaveDeck} />
      </div>
      {isNewDeckModalOpen && (
        <Modal>
          <NewDeckModal setIsNewDeckModalOpen={setIsNewDeckModalOpen} />
        </Modal>
      )}
      {isLoadDeckModalOpen && (
        <Modal>
          <LoadDeckModal
            setIsLoadDeckModalOpen={setIsLoadDeckModalOpen}
            premadeDecks={premadeDecks}
          />
        </Modal>
      )}
    </div>
  );
}
