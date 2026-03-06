import json
import sys
import re
from pathlib import Path

def normalize(s: str) -> str:
    """Lowercase and remove all non-alphanumeric characters to improve matching robustness."""
    return re.sub(r'[^a-z0-9]', '', (s or "").lower())

# === Banlist extracted from the user's input ===
FORBIDDEN_0 = [
    "Chaos Emperor Dragon - Envoy of the End",
    "Fiber Jar",
    "Magical Scientist",
    "Makyura the Destructor",
    "Witch of the Black Forest",
    "Yata-Garasu",
    "Butterfly Dagger - Elma",
    "Change of Heart",
    "Confiscation",
    "Dark Hole",
    "Harpie's Feather Duster",
    "Mirage of Nightmare",
    "Monster Reborn",
    "Painful Choice",
    "Raigeki",
    "The Forceful Sentry",
    "Imperial Order",
]

LIMITED_1 = [  # labeled "Forbidden Cards (maxLegal=1)" in the prompt; treated as Limited (maxLegal=1)
    "Black Luster Soldier - Envoy of the Beginning",
    "Breaker the Magical Warrior",
    "Cyber Jar",
    "Dark Magician of Chaos",
    "D.D. Warrior Lady",
    "Exodia the Forbidden One",
    "Exiled Force",
    "Injection Fairy Lily",
    "Jinzo",
    "Left Arm of the Forbidden One",
    "Left Leg of the Forbidden One",
    "Morphing Jar",
    "Protector of the Sanctuary",
    "Reflect Bounder",
    "Right Arm of the Forbidden One",
    "Right Leg of the Forbidden One",
    "Sacred Phoenix of Nephthys",
    "Sangan",
    "Sinister Serpent",
    "Tribe-Infecting Virus",
    "Twin-Headed Behemoth",
    "Card Destruction",
    "Delinquent Duo",
    "Graceful Charity",
    "Heavy Storm",
    "Lightning Vortex",
    "Mage Power",
    "Mystical Space Typhoon",
    "Pot of Greed",
    "Premature Burial",
    "Snatch Steal",
    "Swords of Revealing Light",
    "United We Stand",
    "Call of the Haunted",
    "Ceasefire",
    "Deck Devastation Virus",
    "Magic Cylinder",
    "Mirror Force",
    "Reckless Greed",
    "Ring of Destruction",
    "Torrential Tribute",
]

SEMI_2 = [
    "Abyss Soldier",
    "Dark Scorpion - Chick the Yellow",
    "Manticore of Darkness",
    "Marauding Captain",
    "Night Assailant",
    "Vampire Lord",
    "Creature Swap",
    "Emergency Provisions",
    "Level Limit - Area B",
    "Nobleman of Crossout",
    "Reinforcement of the Army",
    "Upstart Goblin",
    "Good Goblin Housekeeping",
    "Gravity Bind",
    "Last Turn",
]

# Build normalized lookup sets
_forbidden0 = {normalize(n) for n in FORBIDDEN_0}
_limited1   = {normalize(n) for n in LIMITED_1}
_semi2      = {normalize(n) for n in SEMI_2}

def apply_banlist_to_cards(obj: dict) -> dict:
    """
    Modify the JSON object in-place (and return it). Looks for top-level "data" array.
    Each element in data is expected to be a dict with a "name" key.
    """
    data = obj.get("data")
    if not isinstance(data, list):
        raise ValueError('Input JSON must contain a top-level "data" array of card objects.')

    for card in data:
        # default to non-limited (3)
        max_legal = 3
        name = card.get("name", "")
        norm = normalize(name)

        if norm in _forbidden0:
            max_legal = 0
        elif norm in _limited1:
            max_legal = 1
        elif norm in _semi2:
            max_legal = 2
        # set/overwrite the property
        card["maxLegal"] = max_legal

    return obj

def main(argv):
    if len(argv) < 2:
        print("Usage: python apply_banlist.py input.json [output.json]", file=sys.stderr)
        return 2

    input_path = Path(argv[1])
    if not input_path.exists():
        print(f"Error: input file not found: {input_path}", file=sys.stderr)
        return 2

    with input_path.open("r", encoding="utf-8") as f:
        j = json.load(f)

    j = apply_banlist_to_cards(j)

    if len(argv) >= 3:
        out_path = Path(argv[2])
        with out_path.open("w", encoding="utf-8") as f:
            json.dump(j, f, ensure_ascii=False, indent=2)
    else:
        # print to stdout
        json.dump(j, sys.stdout, ensure_ascii=False, indent=2)
        print()  # newline

    return 0

if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
