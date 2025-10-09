"use client";

import { useState } from "react";
import SaveDeckInput from "@/app/components/deck-screen/old_/save-deck-form/SaveDeckInput";
import SaveDeckButton from "@/app/components/deck-screen/save-deck-form/SaveDeckButton";
import { showToast } from "@/app/components/modals/ToastManager";
import DeckDeletionModal from "@/app/components/modals/DeckDeletionModal";
import DeckOverwriteModal from "@/app/components/modals/DeckOverwriteModal";

export default function SaveDeckForm() {
  const [deckName, setDeckName] = useState("");
  const [deletionModalVisible, setDeletionModalVisible] = useState(false);
  const [overwriteModalVisible, setOverwriteModalVisible] = useState(false);

  const handleChange = (e) => {
    setDeckName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Deck name is mandatory
    if (!deckName.trim()) {
      showToast("Enter a deck name");
      return;
    }

    // Try to save deck on local storage
    const storedDecks = localStorage.getItem("decks");
    const decks = storedDecks ? JSON.parse(storedDecks) : [];

    // If new deck, save it.
    if (!decks.includes(deckName)) {
      decks.push(deckName);
      // TODO: Each deck should be an object with cards in it
      localStorage.setItem("decks", JSON.stringify(decks));
      showToast("New deck saved ✓");
    } else {
      // If deck already exist, ask if overwrite.
      setOverwriteModalVisible(true);
    }
  };

  const overwriteDeck = () => {
    const storedDecks = localStorage.getItem("decks");
    const decks = storedDecks ? JSON.parse(storedDecks) : [];

    // TODO: Overwrite deck cards

    showToast("Deck overwritten ✓");
    closeOverwriteModal();
  };

  const closeOverwriteModal = () => {
    setOverwriteModalVisible(false);
  };

  const styles = {
    form: "flex w-full",
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <SaveDeckInput onChange={handleChange} value={deckName} />
        <SaveDeckButton />
        {/* Modals */}
        {deletionModalVisible && <DeckDeletionModal />}

        {overwriteModalVisible && (
          <DeckOverwriteModal
            currentDeck={deckName}
            onOverwriteClick={overwriteDeck}
            onCancelClick={closeOverwriteModal}
          />
        )}
      </form>
    </>
  );
}
