import { useEffect, useState } from "react";
import { useScreen } from "@/app/context/ScreenContext";
import { fetchCards } from "@/app/lib/fetchCards";
import CardsGrid from "./CardsGrid/CardsGrid";

export default function AllCardsScreen() {
  const { currentScreen } = useScreen();
  const [currentCards, setCurrentCards] = useState();

  useEffect(() => {
    fetchCards().then(setCurrentCards).catch(console.error);
  }, []);

  const styles = {
    container: `w-full h-full bg-blue-500 absolute inset-0 overflow-auto p-2 ${
      currentScreen === "AllCardsScreen"
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`,
  };

  return (
    <div data-component="AllCardsScreen" className={styles.container}>
      {currentCards ? (
        <CardsGrid currentCards={currentCards} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
