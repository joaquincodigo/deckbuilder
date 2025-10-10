import { useScreen } from "@/app/context/ScreenContext";
import CardsGrid from "./CardsGrid/CardsGrid";

export default function AllCardsScreen() {
  const { currentScreen } = useScreen();

  const styles = {
    container: `w-full h-full bg-blue-500 absolute inset-0 overflow-auto ${
      currentScreen === "AllCardsScreen"
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`,
  };

  const items = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div data-component="AllCardsScreen" className={styles.container}>
      <CardsGrid />
    </div>
  );
}
