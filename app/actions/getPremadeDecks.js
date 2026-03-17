import fs from "fs";
import path from "path";

export function getPremadeDecks() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "premade_decks.json"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const premadeDecksJSON = JSON.parse(fileContent);
  return premadeDecksJSON
}
