import { getCardData } from "@/app/lib/getCardData";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Parse request
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("query") || "").trim().toLowerCase();
  const offsetRaw = searchParams.get("offset") ?? "0";
  const offset = Number.parseInt(offsetRaw, 10);
  const safeOffset = Number.isFinite(offset) && offset > 0 ? offset : 0;
  const LIMIT = 72;

  // Fetch data (await in case getCardData is async) and guard
  const cardData = getCardData();

  // Search (guard card.name)
  const queryResult = cardData.filter(
    (card) =>
      typeof card.name === "string" && card.name.toLowerCase().includes(query)
  );

  // Slice and remaining count
  const additionalCards = queryResult.slice(safeOffset, safeOffset + LIMIT);
  const remainingCardsToFetch = Math.max(
    queryResult.length - (safeOffset + LIMIT),
    0
  );

  return NextResponse.json([additionalCards, remainingCardsToFetch]);
}
