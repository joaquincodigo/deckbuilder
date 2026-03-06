import AllCardsTabIcon from "./AllCardsTabIcon";

export default function AllCardsTab({ screen, setScreen }) {
  const styles = {
    tab: `fixed flex items-center justify-center gap-x-2 bottom-0 right-0 h-12 w-52/100 bg-allcards-bg   text-white text-xl ${
      screen === "allCards" ? "z-30 rounded-bl-2xl" : "z-10"
    }`,
    text: "",
  };

  return (
    <button
      data-component="AllCardsTab"
      onMouseDown={() => setScreen("allCards")}
      className={styles.tab}
    >
      <AllCardsTabIcon />
      <span className={styles.text}>All cards</span>
    </button>
  );
}
