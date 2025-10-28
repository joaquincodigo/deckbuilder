import { useScreen } from "@/app/context/ScreenContext";
import AllCardsTabIcon from "./AllCardsTabIcon";

export default function AllCardsTab() {
  const { currentScreen, setCurrentScreen } = useScreen();

  const styles = {
    tab: `fixed flex items-center justify-center gap-x-2 bottom-0 right-0 h-18 w-52/100 bg-allcards-bg rounded-br-2xl rounded-bl-2xl text-white text-xl ${
      currentScreen === "AllCardsScreen" ? "z-30" : "z-10"
    }`,
    text: "",
  };

  return (
    <button
      data-component="AllCardsTab"
      onMouseDown={() => setCurrentScreen("AllCardsScreen")}
      className={styles.tab}
    >
      <AllCardsTabIcon />
      <span className={styles.text}>All cards</span>
    </button>
  );
}
