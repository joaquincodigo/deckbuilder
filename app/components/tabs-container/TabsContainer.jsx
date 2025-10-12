import { useScreen } from "@/app/context/ScreenContext";
import DeckTab from "./tabs/DeckTab";
import AllCardsTab from "./tabs/AllCardsTab";

export default function Nav() {
  const { currentScreen } = useScreen();

  /*
    There's some styling trickery with wrappers, bg-colors and round corners
    to create Google Chrome's old tabs design. The overly complicated design
    is due to inset shadow pouring shadow on the sides when a blur is added.
    That breaks the ilusion of a tab.

    The three elements are: the container of both tabs, a tab wrapper for
    each tab and the tabs themselves.
  */
  const styles = {
    container: `h-18 flex shadow-[inset_0px_4px_6px_rgba(0,0,0,3)]  ${
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
