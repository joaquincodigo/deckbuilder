export default function NewDeckModal({ setIsNewDeckModalOpen }) {
  const styles = {
    NewDeckModal: "w-full h-full flex items-center justify-center pb-20 p-3",
    content: "w-full bg-white p-3",
    modalTitle: "font-bold mb-3",
    form: "flex flex-col",
    input: "border mb-6 px-1 pt-1",
    buttonWrapper: "flex gap-x-3 justify-end",
    button: "border px-3 pb-1",
  };

  return (
    <div data-component="NewDeckModal" className={styles.NewDeckModal}>
      <div className={styles.content}>
        <h2 className={styles.modalTitle}>Create new deck</h2>

        <form className={styles.form}>
          <label htmlFor="name">Deck name:</label>
          <input
            type="text"
            id="deckname"
            name="deckname"
            required
            className={styles.input}
            placeholder="Enter your deck's name"
          />

          <div className={styles.buttonWrapper}>
            <button
              onClick={() => {
                setIsNewDeckModalOpen(false);
              }}
              type="button"
              className={styles.button}
            >
              Cancel
            </button>
            <button className={styles.button}>Create Deck</button>
          </div>
        </form>
      </div>
    </div>
  );
}
