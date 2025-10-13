import { useScreen } from "@/app/context/ScreenContext";

export default function AllCardsTab() {
  const { currentScreen, setCurrentScreen } = useScreen();

  const styles = {
    tab: `fixed bottom-0 right-0 h-18 w-52/100 bg-blue-500 rounded-br-2xl rounded-bl-2xl ${
      currentScreen === "AllCardsScreen" ? "z-30" : "z-10"
    }`,
  };

  return (
    <button
      data-component="AllCardsTab"
      onMouseDown={() => setCurrentScreen("AllCardsScreen")}
      className={styles.tab}
    >
      All cards
    </button>
  );
}
