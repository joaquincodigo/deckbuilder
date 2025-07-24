import Card from "@/app/components/card/Card";

export default function DeckCards() {
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  const random1to9 = () => {
    return Math.floor(Math.random() * 9) + 1;
  };
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const styles = {
    grid: "flex-grow grid grid-cols-3 gap-y-2 gap-x-2 overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  return (
    <div className={styles.grid}>
      {/*  TESTING-TESTING-TESTING-TESTING-TESTING-TESTING */}
      {Array.from({ length: 36 }).map((_, i) => (
        <Card key={i} width={108} atk={random1to9()} def={random1to9()} />
      ))}
      {/*  TESTING-TESTING-TESTING-TESTING-TESTING-TESTING */}
    </div>
  );
}
