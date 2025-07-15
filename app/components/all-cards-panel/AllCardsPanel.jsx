export default function AllCardsPanel() {
  const styles = {
    constraint: "fixed top-0 left-15 h-full w-[170%] z-40 border-4 border-dotted border-purple-500 ",
    body: "fixed flex top-0 left-15 w-full h-full bg-slate-300 z-40 text-white",
    handle: "h-full z-40 w-12 bg-blue-500 text-white",
  };

  return (
    <div className={styles.constraint}>
      {/* <div className={styles.body}>
        <div className={styles.handle}>{"<<"}</div>
      </div> */}
    </div>
  );
}
