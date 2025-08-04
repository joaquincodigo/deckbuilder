import LeftArrowIndicator from "./LeftArrowIndicator";

export default function EdgeIndicator() {
  const styles = {
    body: "flex flex-col justify-center h-screen w-6 bg-blue-500",
    textContainer: "h-24 my-6 pt-1",
    text: "rotate-90 whitespace-nowrap text-white font-bold",

  };

  return (
    <div className={styles.body}>
      <LeftArrowIndicator />
      <div className={styles.textContainer}>
        <p className={styles.text}>ALL CARDS</p>
      </div>
      <LeftArrowIndicator />
    </div>
  );
}
