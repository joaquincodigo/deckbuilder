import { log } from "console";
import fs from "fs";
import path from "path";

export async function GET(request) {
  // Data Source
  const filePath = path.join(
    process.cwd(),
    "app",
    "data",
    "all_goat_cards.json"
  );
  const cardsJSON = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const cardsData = cardsJSON.data;

  // Params
  const { searchParams } = new URL(request.url);

  const start = parseInt(searchParams.get("offset") || 0);
  const limit = parseInt(searchParams.get("limit") || 20);
  const end = start + limit;
  const query = parseInt(searchParams.get("query") || "");

  const results = cardsData.slice(start, end);
  return Response.json(cardsData.slice(start, end));
}
