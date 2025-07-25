export default function AllCardsHeader() {
  const styles = {
    heading: "font-bold text-2xl text-white",
  };

  return (
    <>
      <p className={styles.heading}>All cards</p>
      <hr className={styles.separator} />
    </>
  );
}
