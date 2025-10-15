import fs from "fs";
import path from "path";

export function getCardData() {
  const filePath = path.join(
    process.cwd(),
    "app",
    "data",
    "all_goat_cards.json"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const cardsJSON = JSON.parse(fileContent);
  return cardsJSON.data;
}
