export default function AllcardsEdgeIndicator() {
  const styles = {
    body: "flex flex-row items-center h-screen w-6 bg-amber-500",
    text: "transform -rotate-90 origin-top-left whitespace-nowrap font-bold text-black",
  };

  return (
    <div className={styles.body}>
      <p className={styles.text}>Deck</p>
    </div>
  );
}
