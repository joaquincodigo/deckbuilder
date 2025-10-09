import DeckNavButton from "./nav-buttons/DeckNavButton";
import AllCardsNavButton from "./nav-buttons/AllCardsNavButton";

export default function Nav({ setCurrentScreen }) {
  const styles = {
    container: "bg-sky-500 h-14 flex",
  };
  return (
    <div data-component="Nav" className={styles.container}>
      <DeckNavButton setCurrentScreen={setCurrentScreen} />
      <AllCardsNavButton setCurrentScreen={setCurrentScreen} />
    </div>
  );
}
