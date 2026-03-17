import json
import sys
from pathlib import Path

# usage:
# python strip_fields.py input.json output.json
# or (in-place):
# python strip_fields.py input.json

FIELDS_TO_REMOVE = {
    "humanReadableCardType",
    "typeline",
    "frameType",
}

def strip_fields(cards):
    for card in cards:
        for field in FIELDS_TO_REMOVE:
            card.pop(field, None)  # remove if exists, ignore otherwise
    return cards

def main():
    if len(sys.argv) < 2:
        print("usage: python strip_fields.py input.json [output.json]")
        sys.exit(1)

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else input_path

    with input_path.open("r", encoding="utf-8") as f:
        data = json.load(f)

    # assume top-level is a list of card objects
    cleaned = strip_fields(data)

    with output_path.open("w", encoding="utf-8") as f:
        json.dump(cleaned, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
