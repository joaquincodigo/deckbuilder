import MainWrapper from "@/app/components/MainWrapper";
import DeckPanel from "@/app/components/DeckPanel";
import SearchPanelWithConstraints from "@/app/components/SearchPanelWithConstraints";

export default function Page() {
  return (
    <MainWrapper>
      <DeckPanel />
      <SearchPanelWithConstraints />
    </MainWrapper>
  );
}
