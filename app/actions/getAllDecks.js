"use server";

export async function getAllDecks() {
  const allDecks = [
    {
      name: "Dummy Deck 1",
      cards: [
        { id: 86988864, quantity: 2 },
        { id: 83994646, quantity: 1 },
        { id: 67048711, quantity: 3 },
        { id: 23771716, quantity: 2 },
        { id: 86198326, quantity: 1 },
        { id: 14261867, quantity: 3 },
        { id: 24140059, quantity: 2 },
        { id: 6850209, quantity: 1 },
        { id: 49140998, quantity: 2 },
        { id: 68170903, quantity: 3 },
        { id: 21597117, quantity: 1 },
        { id: 295517, quantity: 2 },
        { id: 51351302, quantity: 3 },
      ],
    },
    {
      name: "Dummy Deck 2",
      cards: [
        { id: 86988864, quantity: 2 },
        { id: 83994646, quantity: 1 },
        { id: 67048711, quantity: 3 },
        { id: 23771716, quantity: 2 },
        { id: 86198326, quantity: 1 },
        { id: 14261867, quantity: 3 },
        { id: 24140059, quantity: 2 },
        { id: 6850209, quantity: 1 },
        { id: 49140998, quantity: 2 },
        { id: 68170903, quantity: 3 },
        { id: 21597117, quantity: 1 },
        { id: 295517, quantity: 2 },
        { id: 51351302, quantity: 3 },
      ],
    },
    {
      name: "Dummy Deck 3",
      cards: [
        { id: 86988864, quantity: 2 },
        { id: 83994646, quantity: 1 },
        { id: 67048711, quantity: 3 },
        { id: 23771716, quantity: 2 },
        { id: 86198326, quantity: 1 },
        { id: 14261867, quantity: 3 },
        { id: 24140059, quantity: 2 },
        { id: 6850209, quantity: 1 },
        { id: 49140998, quantity: 2 },
        { id: 68170903, quantity: 3 },
        { id: 21597117, quantity: 1 },
        { id: 295517, quantity: 2 },
        { id: 51351302, quantity: 3 },
      ],
    },
  ];

  return allDecks;
}
