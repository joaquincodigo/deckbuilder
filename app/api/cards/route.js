import fs from "fs";
import path from "path";

export async function GET(req) {
  const filePath = path.join(
    process.cwd(),
    "app",
    "data",
    "all_goat_cards.json"
  );
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const cards = jsonData.data;

  return new Response(JSON.stringify(cards.slice(0, 2)), {
    headers: { "Content-Type": "application/json" },
  });
}
