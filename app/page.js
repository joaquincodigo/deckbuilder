import { getAllCards } from "./actions/getAllCards";
import { getAllDecks } from "./actions/getAllDecks";
import ClientWrapper from "./components/client-wrapper/ClientWrapper";

export default async function Page() {
  const premadeDecks = await getAllDecks();
  const allCards = await getAllCards();

  return <ClientWrapper allCards={allCards} premadeDecks={premadeDecks} />;
}
