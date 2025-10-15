import { getCardData } from "@/app/lib/getCardData";

export async function GET() {
  const cardData = getCardData();
  const first72 = cardData.slice(0, 72);
  const remainingCount = cardData.length - 72;

  return Response.json([first72, remainingCount]);
}
