import { useScreen } from "@/app/context/ScreenContext";

export default function AllCardsNavButton() {
  const { setCurrentScreen } = useScreen();

  const styles = {
    button: "h-full w-1/2 bg-blue-500",
  };

  return (
    <button
      data-component="AllCardsNavButton"
      onClick={() => setCurrentScreen("AllCardsScreen")}
      className={styles.button}
    >
      All cards
    </button>
  );
}
