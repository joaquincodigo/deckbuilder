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

// import fs from "fs";
// import path from "path";

// export async function GET(request) {
//   // Reading card data from file
//   const filePath = path.join(
//     process.cwd(),
//     "app",
//     "data",
//     "all_goat_cards.json"
//   );
//   const cardsJSON = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//   const cardsData = cardsJSON.data;

//   // Parsing request URL
//   const { searchParams } = new URL(request.url);

//   const start = parseInt(searchParams.get("offset") || 0);
//   const limit = parseInt(searchParams.get("limit") || 72);
//   const end = start + limit;

//   const query = searchParams.get("query")?.toLowerCase() || "";

//   let filtered = cardsData;

//   if (query) {
//     filtered = cardsData.filter((card) =>
//       card.name.toLowerCase().includes(query)
//     );
//   }

//   const results = filtered.slice(start, end);
//   // results.unshift("Testññ");
//   return Response.json(results);
// }
