import json

INPUT = "all_goat_cards.json"
OUTPUT = "card_data.json"

KEEP = {
    "id",
    "name",
    "typeline",
    "type",
    "humanReadableCardType",
    "frameType",
    "desc",
    "race",
    "atk",
    "def",
    "level",
    "attribute",
}

def clean_card(card):
    # keep only allowed fields if present
    return {k: card[k] for k in KEEP if k in card}

def main():
    with open(INPUT, "r", encoding="utf-8") as f:
        data = json.load(f)

    cleaned = {"data": [clean_card(card) for card in data.get("data", [])]}

    with open(OUTPUT, "w", encoding="utf-8") as f:
        json.dump(cleaned, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
