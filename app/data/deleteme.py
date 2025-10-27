# myScript.py
import json
import sys

query = sys.argv[1].lower()

with open("all_goat_cards.json") as f:
    data = json.load(f)["data"]

for card in data:
    name = card.get("name", "")
    if query in name.lower():
        print(name)
