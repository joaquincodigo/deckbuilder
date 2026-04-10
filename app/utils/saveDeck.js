export default function saveDeck(deck) {
  const decks = JSON.parse(localStorage.getItem("userDecks") || "[]");
  decks.push(deck);
  localStorage.setItem("userDecks", JSON.stringify(decks));
}
