import Modal from "@/app/components/modals/Modal";
import Button from "@/app/components/ui/Button";

export default function DeckDeletionModal(currentDeck) {
  const styles = {
    body: "flex flex-col p-3 bg-white rounded-md",
    text: "mb-3",
    footer: "flex gap-x-3 justify-end",
    delete: "bg-red-500 text-white",
    cancel: "border border-slate-500 text-slate-800",
  };

	// TESTING-TESTING-TESTING-TESTING-TESTING-TESTINGyyp
	currentDeck = "hello"
	// TESTING-TESTING-TESTING-TESTING-TESTING-TESTINGyyp


  return (
    <Modal>
      <div className={styles.body}>
        <p className={styles.text}>
          Are you sure you want to <strong>delete</strong> the {currentDeck}
          deck?
        </p>
        <div className={styles.footer}>
          <Button label="Cancel" className={styles.cancel} />
          <Button label="Delete" className={styles.delete} />
        </div>
      </div>
    </Modal>
  );
}
