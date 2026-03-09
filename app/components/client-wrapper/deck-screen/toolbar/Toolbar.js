export default function Toolbar() {
  const styles = {
    Toolbar: "fixed top-0 left-0 right-0 h-12 px-2 pt-2 z-10 bg-purple-500",
		openDeckBtn: "h-full aspect-square border border-black"
  };

  return (
    <div data-component="Toolbar" className={styles.Toolbar}>
      <button className={styles.openDeckBtn}>X</button>
    </div>
  );
}
