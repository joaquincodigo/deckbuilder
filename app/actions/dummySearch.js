import { getAllCards } from "./getAllCards";

// simplified version with pagination
export function dummySearch(queryString, offset) {
  const allCards = getAllCards(); // all card objects
  const query = (queryString || "").trim().toLowerCase();

  // filter cards by name containing query
  const filtered = allCards.filter((card) =>
    card.name.toLowerCase().includes(query)
  );

  return filtered; // array of card objects for this page
}
