"use server";

import { getCardData } from "../lib/getCardData";

export async function getInitialCards() {
  const allCards = getCardData();
  
  const initial72Cards = allCards.slice(0, 72);
  const currentOffset = 72;
  const remainingCardsToFetch = allCards.length - currentOffset;

  return [initial72Cards, currentOffset, remainingCardsToFetch];
}
