import { getCardData } from "@/app/lib/getCardData";

export async function GET(request) {
  
  // Parse request
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.toLowerCase() || "";

  // Search
  const cardData = getCardData();
  const queryResult = cardData.filter((card) =>
    card.name.toLowerCase().includes(query)
  );
  const first72Queried = queryResult.slice(0, 72);

  // Remaining cards
  const remainingCardsToFetch = Math.max(queryResult.length - 72, 0);

  return Response.json([first72Queried, remainingCardsToFetch]);
}