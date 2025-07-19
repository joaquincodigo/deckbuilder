export default function AllCardsScreen() {
  const styles = {
    body: "w-screen h-full bg-blue-500 p-6",
    heading: "font-bold text-2xl text-white",
  };

  return (
    <div className={styles.body}>
      <p className={styles.heading}>All Cards</p>
    </div>
  );
}
