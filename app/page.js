import MainWrapper from "@/app/components/MainWrapper";
import DeckScreen from "./components/deck-screen/DeckScreen";
import AllCardsScreen from "./components/all-cards-screen/AllCardsScreen";

export default function DeckBuilderPage() {
  return (
    <MainWrapper>
      <DeckScreen />
      <AllCardsScreen />
    </MainWrapper>
  );
}
