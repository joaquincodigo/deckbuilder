export default function AllCardsNavButton({ setCurrentScreen }) {
  const styles = {
    button: "h-full w-1/2 bg-blue-500",
  };

  return (
    <button
      data-component="AllCardsNavButton"
      onClick={() => setCurrentScreen("AllCardsScreen")}
      className={styles.button}
    >
      IM ALLCARDS NAV BTN
    </button>
  );
}
