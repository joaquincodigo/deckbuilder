import MainWrapper from "@/app/components/MainWrapper";
import DeckScreen from "./components/deck-panel/DeckPanel";
import AllCardsScreen from "./components/all-cards-panel/AllCardsPanel";

export default function DeckBuilderPage() {
  return (
    <MainWrapper>
      <DeckScreen />
      <AllCardsScreen />
    </MainWrapper>
  );
}
