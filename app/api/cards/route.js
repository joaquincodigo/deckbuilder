import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  const filePath = path.join(process.cwd(), "app", "data", "all_goat_cards.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const cards = jsonData.data;

  const withImages = cards.slice(0, 30).map(card => ({
    ...card,
    imageUrl: `/card_images/${card.id}.jpg`, // assumes /public/cards/86988864.jpg
  }));

  return new Response(JSON.stringify({ data: withImages }), {
    headers: { "Content-Type": "application/json" },
  });
}
