import { useScreen } from "@/app/context/ScreenContext";

export default function AllCardsNavButton() {
  const { currentScreen, setCurrentScreen } = useScreen();

  const styles = {
    button: `relative h-full w-1/2 ${
      currentScreen === "AllCardsScreen" ? "bg-blue-500" : ""
    }`,
    topCornerMask:
      "absolute h-3/10 aspect-square top-0 left-0 -translate-x-full",
    bottomCornerMask: "absolute h-1/4 aspect-square bottom-0 left-0",
  };

  return (
    <button
      data-component="AllCardsNavButton"
      onMouseDown={() => setCurrentScreen("AllCardsScreen")}
      className={styles.button}
    >
      {currentScreen === "AllCardsScreen" && (
        <>
          <div className={styles.topCornerMask}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                d="M0 0 L100 0 L100 100 A100 100 0 0 0 0 0 Z"
                fill="#2b7fff"
              />
            </svg>
          </div>
          <div className={styles.bottomCornerMask}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                d="M100 100 L0 100 L0 0 A100 100 0 0 0 100 100 Z"
                fill="#fe9a00"
              />
            </svg>
          </div>
        </>
      )}
      All cards
    </button>
  );
}
