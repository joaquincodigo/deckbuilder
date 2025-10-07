import fs from "fs"
import path from "path"

export async function GET(request) {
  const filePath = path.join(process.cwd(), "app", "data", "all_goat_cards.json")
  const cardsJSON = JSON.parse(fs.readFileSync(filePath, "utf-8"))
  const cardsData = cardsJSON.data

  const { searchParams } = new URL(request.url)
  const start = parseInt(searchParams.get("offset") || 0)
  const limit = parseInt(searchParams.get("limit") || 72)
  const query = searchParams.get("query")?.toLowerCase() || ""

  let filtered = cardsData

  if (query) {
    filtered = cardsData.filter(card =>
      card.name.toLowerCase().includes(query)
    )
  }

  const end = start + limit
  const results = filtered.slice(start, end)

  return Response.json(results)
}
