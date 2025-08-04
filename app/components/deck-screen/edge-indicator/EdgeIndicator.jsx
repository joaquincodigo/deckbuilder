import RightArrowIndicator from "./LeftArrowIndicator";

export default function EdgeIndicator() {
  const styles = {
    body: "flex flex-col justify-center h-screen w-5 bg-blue-500",
    textContainer: "h-24 mb-6 mt-8 pt-1",
    text: "rotate-90 whitespace-nowrap text-white/80 font-bold text-sm",

  };

  return (
    <div className={styles.body}>
      <RightArrowIndicator />
      <div className={styles.textContainer}>
        <p className={styles.text}>ALL CARDS</p>
      </div>
      <RightArrowIndicator />
    </div>
  );
}
