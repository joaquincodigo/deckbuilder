import { useScreen } from "@/app/context/ScreenContext";
import { useEffect } from "react";

export default function DeckScreen() {
  const { currentScreen } = useScreen();

  useEffect(() => {
    console.log(currentScreen);
  }, [currentScreen]);

  const styles = {
    container: `w-full h-full bg-amber-500 absolute inset-0 ${
      currentScreen === "DeckScreen"
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`,
  };

  return (
    <div data-component="DeckScreen" className={styles.container}>
      I am deck screen
    </div>
  );
}
