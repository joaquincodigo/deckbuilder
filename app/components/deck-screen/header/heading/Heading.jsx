export default function Heading() {
  const styles = {
    container: "flex-1",
    heading: "font-bold text-2xl",
    separator: "mb-3",
  };
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Deck</p>
      <hr className={styles.separator} />
    </div>
  );
}
