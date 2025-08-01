export default function DeckScreenHeader() {
  const styles = {
    heading: "font-bold text-2xl",
    separator: "mb-3 te",
    buttonsContainer: "flex w-100%"
  };
  return (
    <>
      <p className={styles.heading}>Deck</p>
      <hr className={styles.separator} />
      <div className={styles.buttonsContainer}>

      </div>
    </>
  );
}
