export async function fetchQueriedCards(formData) {
  const params = new URLSearchParams()
  const query = formData.get("allCardsQuery") || "";
  
  const URL = `/api/initial-queried-cards?query=${query}`;

  const response = await fetch(URL);
  const [queriedCardsState, remainingCardsToFetch] = await response.json();

  return [queriedCardsState, remainingCardsToFetch];
}

export async function fetchAdditionalCards(formData, offset) {
  let URL;

  if (!formData) {
    URL = `/api/additional-cards?offset=${offset}`;
  } else {
    const query = formData.get("allCardsQuery") || "";
    URL = `/api/addiontinal-cards?offset=${offset}&query=${query}`;
  }

  const response = await fetch(URL);
  if (!response.ok) throw new Error("Failed to fetch cards");

  const [additionalCards, remainingCardsToFetch] = await response.json();

  return [additionalCards, remainingCardsToFetch];
}
