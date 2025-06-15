import DeckPanel from "@/app/components/DeckPanel";
import SearchPanel from "@/app/components/SearchPanel";
import MainWrapper from "@/app/components/MainWrapper";

export default function Page() {
  return (
    <MainWrapper>
      <DeckPanel />
      <SearchPanel />
    </MainWrapper>
  );
}
