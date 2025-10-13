import { useScreen } from "@/app/context/ScreenContext";
import DeckTab from "./tabs/DeckTab";
import AllCardsTab from "./tabs/AllCardsTab";

export default function Nav() {
  const { currentScreen } = useScreen();

  const styles = {
    container: `relative top-0  h-18 flex shadow-[inset_0px_4px_6px_rgba(0,0,0,0.6)]  ${
      currentScreen === "DeckScreen" ? "bg-blue-500" : "bg-amber-500"
 
    }`,
  };

  return (
    <nav data-component="TabContainer" className={styles.container}>
      <DeckTab />
      <AllCardsTab />
    </nav>
  );
}
