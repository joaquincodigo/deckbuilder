export async function fetchInitialCards() {
  const response = await fetch("/api/initial-cards");
  if (!response.ok) throw new Error("Fetch failed");
  const [initialCardState, remainingCardsToFetch] = await response.json();
  return [initialCardState, remainingCardsToFetch];
}

export async function fetchQueriedCards(formData) {
  const query = formData.get("allCardsQuery") || "";
  const URL = `/api/initial-queried-cards?query=${query}`;

  const response = await fetch(URL);
  const [queriedCardsState, remainingCardsToFetch] = await response.json();

  return [queriedCardsState, remainingCardsToFetch];
}

export async function fetchAdditionalCards(formData, offset) {}

// export async function fetchCards(searchFormData, offset = 0) {
//   let URL;
//   if (!searchFormData && !offset) URL = "/api/cards";
//   else if (offset) URL = `/api/cards&${offset}`;
//   else
//     URL = `/api/cards?query=${searchFormData.allCardsQuery}&offset=${offset}`;

//   const res = await fetch(URL);
//   if (!res.ok) throw new Error("Fetch failed");
//   return res.json();
// }
