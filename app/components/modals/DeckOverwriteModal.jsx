import Modal from "@/app/components/modals/Modal";
import Button from "@/app/components/ui/Button";

export default function DeckOverwriteModal({
  currentDeck,
  onCancelClick,
  onOverwriteClick,
}) {
  const styles = {
    body: "flex flex-col p-3 bg-white rounded-md shadow-lg shadow-black",
    text: "mb-6",
    footer: "flex gap-x-3 justify-end",
    overwrite: "bg-blue-500 text-white",
    cancel: "border border-slate-500 text-slate-800",
  };

  return (
    <Modal>
      <div className={styles.body}>
        <p className={styles.text}>
          Do you want to <strong>overwrite</strong> your existing{" "}
          <strong>{currentDeck}</strong> deck?
        </p>
        <div className={styles.footer}>
          <Button
            label="Cancel"
            onClick={onCancelClick}
            className={styles.cancel}
          />
          <Button
            label="Overwrite"
            onClick={onOverwriteClick}
            className={styles.overwrite}
          />
        </div>
      </div>
    </Modal>
  );
}
