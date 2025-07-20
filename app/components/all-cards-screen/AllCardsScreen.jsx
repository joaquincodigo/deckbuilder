export default function AllCardsScreen() {
  const styles = {
    body: "w-screen h-full bg-blue-500 py-3 px-3 overflow-y-scroll touch-pan-y",
    heading: "font-bold text-2xl text-white",
  };

  return (
    <div className={styles.body}>
      <p className={styles.heading}>All Cards</p>
    </div>
  );
}
