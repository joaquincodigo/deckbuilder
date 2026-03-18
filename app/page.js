import { getAllCards } from "./actions/getAllCards";
import { getPremadeDecks } from "./actions/getPremadeDecks";
import ClientWrapper from "./components/client-wrapper/ClientWrapper";

export default async function Page() {
  const premadeDecks = await getPremadeDecks();
  const allCards = await getAllCards();
  return <ClientWrapper allCards={allCards} premadeDecks={premadeDecks} />;
}
