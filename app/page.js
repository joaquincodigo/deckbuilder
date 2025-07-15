import cards from "@/devfiles/dummy_data.json";
import MainWrapper from "@/app/components/MainWrapper";

export default function DeckBuilderPage() {
  return <MainWrapper cards={cards} />;
}
