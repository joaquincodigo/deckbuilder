import { useScreen } from "@/app/context/ScreenContext";
import DeckScreen from "../../deck-screen/DeckScreen";

export default function DeckNavButton() {
  const { currentScreen, setCurrentScreen } = useScreen();

  const styles = {
    button: `relative h-full w-1/2 ${
      currentScreen === "DeckScreen" ? "bg-amber-500" : ""
    }`,
    // The translates are to prevent a rendering subpixel artifact
    topCornerMask:
      "absolute h-3/10 aspect-square top-0 right-[1px] transform: translateX(-1px) translate-x-full scale-x-[-1]",
    bottomCornerMask:
      "absolute h-1/6 aspect-square bottom-0 right-[-1px] transform: translateX(-1px) scale-x-[-1]",
  };

  return (
    <button
      data-component="DeckNavButton"
      onMouseDown={() => setCurrentScreen("DeckScreen")}
      className={styles.button}
    >
      {currentScreen === "DeckScreen" && (
        <>
          <div className={styles.topCornerMask}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                d="M0 0 L100 0 L100 100 A100 100 0 0 0 0 0 Z"
                fill="#fe9a00"
              />
            </svg>
          </div>
          <div className={styles.bottomCornerMask}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                d="M100 100 L0 100 L0 0 A100 100 0 0 0 100 100 Z"
                fill="#2b7fff"
              />
            </svg>
          </div>
        </>
      )}
      Deck
    </button>
  );
}
