import fs from "fs";
import path from "path";

export function getAllCards() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "all_goat_cards.json"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const cardsJSON = JSON.parse(fileContent);
  return cardsJSON.data;
}
