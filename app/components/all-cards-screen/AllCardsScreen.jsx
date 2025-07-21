import Card from "@/app/components/card/Card";
import AllcardsEdgeIndicator from "@/app/components/all-cards-screen/AllcardsEdgeIndicator";

export default function AllCardsScreen() {
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  const random1to9 = () => {
    return Math.floor(Math.random() * 9) + 1;
  };
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  const styles = {
    body: "w-screen h-screen flex flex-row bg-indigo-500",
    outerWrapper: "flex flex-col bg-blue-500 p-3",
    heading: "font-bold text-2xl text-white",
    separator: "mb-3",
    selectLabel: "text-lg",
    select: "text-lg ms-3 bg-slate-200 p-1",
    cardContainer:
      "flex-grow grid grid-cols-3 gap-y-2 gap-x-2 overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  return (
    <div className={styles.body}>
      <AllcardsEdgeIndicator />
      <div className={styles.outerWrapper}>
        {/* HEADER */}
        <p className={styles.heading}>All cards</p>
        <hr className={styles.separator} />

        {/* Search */}
        <input
          type="search"
          placeholder="Search"
          className="bg-white px-2 py-1"
        />

        {/* Filters */}
        <div></div>

        {/* /HEADER */}

        {/* DECK LIST */}
        <div className={styles.cardContainer}>
          {/*  TESTING-TESTING-TESTING-TESTING-TESTING-TESTING */}
          {Array.from({ length: 36 }).map((_, i) => (
            <Card key={i} width={108} atk={random1to9()} def={random1to9()} />
          ))}
          {/*  TESTING-TESTING-TESTING-TESTING-TESTING-TESTING */}
        </div>
      </div>
    </div>
  );
}
