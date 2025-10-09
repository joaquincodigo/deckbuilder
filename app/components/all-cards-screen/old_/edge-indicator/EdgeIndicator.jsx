import RightArrowIndicator from "./RightArrowIndicator";

export default function EdgeIndicator() {
  const styles = {
    body: "flex flex-col justify-center h-screen w-5 bg-amber-500",
    textContainer: "h-38 pt-18",
    text: "-rotate-90 whitespace-nowrap text-black/70 font-bold text-sm",
  };

  return (
    <div className={styles.body}>
      <RightArrowIndicator />
      <div className={styles.textContainer}>
        <p className={styles.text}>DECK</p>
      </div>
      <RightArrowIndicator />
    </div>
  );
}
