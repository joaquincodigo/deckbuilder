import { useState } from "react";
import { useScreen } from "@/app/context/ScreenContext";
import CardsGrid from "./CardsGrid/CardsGrid";

export default function AllCardsScreen() {
  const { currentScreen } = useScreen();
  const [currentCards, setCurrentCards] = useState([]);

  const styles = {
    container: `w-full h-full bg-blue-500 absolute inset-0 overflow-auto p-2 ${
      currentScreen === "AllCardsScreen"
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`,
  };

  return (
    <div data-component="AllCardsScreen" className={styles.container}>
      <CardsGrid currentCards={currentCards} />
    </div>
  );
}
