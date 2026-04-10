import { useEffect } from "react";
import DeckListItem from "./DeckListItem";

export default function LoadDeckModal({
  setIsLoadDeckModalOpen,
  premadeDecks,
}) {
  const styles = {
    NewDeckModal: "w-full h-full flex items-center justify-center pb-20 p-3",
    content: "w-full bg-white p-3 max-h-[90%] overflow-y-auto",
    modalTitle: "font-bold mb-3",
    form: "flex flex-col",
    input: "border mb-6 px-1 pt-1",
    buttonWrapper: "flex gap-x-3 justify-end",
    button: "border px-3 pb-1",
  };

  useEffect(() => {
    console.log("PD", premadeDecks);
  }, [premadeDecks[0]]);

  return (
    <div data-component="NewDeckModal" className={styles.NewDeckModal}>
      <div className={styles.content}>
        <h2 className={styles.modalTitle}>Select and load a deck</h2>

        <h3>User decks:</h3>
        <ul>
          <p>Deck 1</p>
          <p>Deck 2</p>
          <p>Deck 3</p>
          <p>Deck 4</p>
          <p>Deck 5</p>
          <p>Deck 1</p>
          <p>Deck 2</p>
          <p>Deck 3</p>
          <p>Deck 4</p>
          <p>Deck 5</p>
          <p>Deck 1</p>
          <p>Deck 2</p>
          <p>Deck 3</p>
          <p>Deck 4</p>
          <p>Deck 5</p>
        </ul>

        <h3>Pre-built decks:</h3>

        <ul>
          {premadeDecks.map((d) => (
            <DeckListItem deck={d} key={d.name + "premade"} />
          ))}
        </ul>
      </div>
    </div>
  );
}
