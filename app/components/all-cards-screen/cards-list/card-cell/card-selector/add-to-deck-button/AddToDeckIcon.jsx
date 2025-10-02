import AddToDeckSvg from "./AddToDeck.svg";

export default function AddToDeckIcon() {
  const styles = {
    icon: "w-10 h-10",
  };

  return (
    <img
      className={styles.icon}
      src={AddToDeckSvg.src}
      alt="Add to deck icon"
    />
  );
}
