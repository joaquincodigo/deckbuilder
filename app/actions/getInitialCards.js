"use server";

import { getCardData } from "../lib/getCardData";

export async function getInitialCards() {
  const cardData = getCardData();
  const initial72 = cardData.slice(0, 72);
  const offset = 72;
  const remaining = cardData.length - offset;

  return [initial72, offset, remaining];
}
