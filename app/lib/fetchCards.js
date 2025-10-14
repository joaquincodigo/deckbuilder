export async function fetchCards(searchFormData, offset=0) {
  let URL;
  if (!searchFormData && !offset) URL = "/api/cards";
  else if (offset) URL = `/api/cards&${offset}`;
  else
    URL = `/api/cards?query=${searchFormData.allCardsQuery}&offset=${offset}`;

  const res = await fetch(URL);
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
}
