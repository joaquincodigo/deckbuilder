import { getAllCards } from "./actions/getAllCards";
import { getAllDecks } from "./actions/getAllDecks";
import ClientWrapper from "./components/client-wrapper/ClientWrapper";

export default async function Page() {
  const allDecks = await getAllDecks();
  const allCards = await getAllCards();

  return (
    <div data-component="Page">
      <ClientWrapper allCards={allCards} allDecks={allDecks} />
    </div>
  );
}
