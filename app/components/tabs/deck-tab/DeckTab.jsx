import DeckTabIcon from "./DeckTabIcon";

export default function DeckTab({ screen, setScreen }) {
  const styles = {
    tab: `fixed bottom-0 flex justify-center items-center gap-x-2 left-0 h-12 w-52/100 bg-amber-500 text-xl ${
      screen === "deck" ? "z-30 rounded-br-2xl" : "z-10"
    }`,
  };

  return (
    <button
      data-component="DeckTab"
      onMouseDown={() => setScreen("deck")}
      className={styles.tab}
    >
      <DeckTabIcon />
      <span className={styles.text}>Deck</span>
    </button>
  );
}
