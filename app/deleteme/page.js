export default function Deleteme() {
  const styles = {
    Deleteme:
      "bg-blue-900 w-screen h-screen grid grid-cols-15 auto-rows-[40px]",
    block: "bg-pink-800 text-white h-7 border-white border-2 rounded-sm",
  };

  return (
    <div data-component="Deleteme" className={styles.Deleteme}>
      {/* Row 1 */}
      <div className={styles.block}>PA</div>
      <div className={styles.block + " col-start-2 col-span-4"}>Label</div>
      <div className={styles.block + " col-start-6 col-span-6"}>Input</div>
      <div className={styles.block}>GA</div>
      <div className={styles.block + " col-start-13 col-span-2"}>Input</div>
      <div className={styles.block}>PA</div>

      {/* Row 2 */}
      <div className={styles.block}>PA</div>
      <div className={styles.block + " col-start-2 col-span-4"}>Label</div>
      <div className={styles.block + " col-start-6 col-span-6"}>Input</div>
      <div className={styles.block}>GA</div>
      <div className={styles.block + " col-start-13 col-span-2"}>Input</div>
      <div className={styles.block}>PA</div>

      {/* Row 3 */}
      <div className={styles.block}>PA</div>
      <div className={styles.block + " col-start-2 col-span-4"}>Label</div>
      <div className={styles.block + " col-start-6 col-span-6"}>Input</div>
      <div className={styles.block}>GA</div>
      <div className={styles.block + " col-start-13 col-span-2"}>Input</div>
      <div className={styles.block}>PA</div>

      {/* Row 4 */}
      <div className={styles.block}>PA</div>
      <div className={styles.block + " col-start-2 col-span-4"}>Label</div>
      <div className={styles.block + " col-start-6 col-span-6"}>Input</div>
      <div className={styles.block}>GA</div>
      <div className={styles.block + " col-start-13 col-span-2"}>Input</div>
      <div className={styles.block}>PA</div>

      {/* Row 5 */}
      <div className={styles.block}>PA</div>
      <div className={styles.block + " col-start-2 col-span-4"}>Label</div>
      <div className={styles.block + " col-start-6 col-span-6"}>Input</div>
      <div className={styles.block}>GA</div>
      <div className={styles.block + " col-start-13 col-span-2"}>Input</div>
      <div className={styles.block}>PA</div>
    </div>
  );
}
