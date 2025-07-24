export default function DeckScreenHeader() {
  const styles = {
    heading: "font-bold text-2xl",
    separator: "mb-3 te",
  };
  return (
    <>
      <p className={styles.heading}>Deck</p>
      <hr className={styles.separator} />
    </>
  );
}
