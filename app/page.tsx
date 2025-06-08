export default function Home() {
  const styles = {
    main: "flex flex-col h-screen bg-slate-500",
    deck: "bg-blue-200",
    search: "flex flex-col flex-1",
    searchTopbar: "bg-orange-400 min-h-15",
    searchContent: "flex-grow bg-orange-300",

  };

  return (
    <main className={styles.main}>
      <div className={styles.deck}>Im deck</div>

      <div className={styles.search}>
        <div className={styles.searchTopbar}>I am search TOPBAR</div>
        <div className={styles.searchContent}>I am search CONTENT</div>
      </div>
    </main>
  );
}
