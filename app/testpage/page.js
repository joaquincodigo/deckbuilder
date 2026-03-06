import TestComp from "./testcomp";
import { getAllCards } from "../actions/getAllCards";

export default async function TestPage({ searchParams }) {
  const cards = getAllCards();

  return (
    <div className="bg-white w-screen h-screen">
      <TestComp cards={cards} />
    </div>
  );
}
