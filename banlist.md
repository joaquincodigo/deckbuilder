# TASK
I need to parse a JSON containing YuGiOh cards data for the goat format.

In YuGiOh there are 4 categories of cards according to a banlist:

- Forbidden cards: you cannot have these cards in your deck.
- Limited cards: you can have up to 1 of them in your deck.
- Semi-Limited cards: you can have up to 2 of them in your deck.
- Non limited cards: you can have up to 3 of them in your deck.

You will code this data into the JSON data of all the cards.
To each card, we will add a property named "maxLegal" and set it to a value form 0 to 3 according to the following:

- Forbidden cards: maxLegal = 0 
- Limited cards: maxLegal = 1 
- Semi-Limited cards: maxLegal = 2 
- Non limited cards: maxLegal = 3

You must output a Python script that does this task.

# EXTRACT OF JSON DATA 

"""
{
  "data": [
    {
      "humanReadableCardType": "Effect Monster",
      "typeline": [
        "Beast",
        "Effect"
      ],
      "race": "Beast",
      "type": "Effect Monster",
      "frameType": "effect",
      "name": "3-Hump Lacooda",
      "attribute": "EARTH",
      "desc": "If there are 3 face-up \"3-Hump Lacooda\" cards on your side of the field, Tribute 2 of them to draw 3 cards.",
      "atk": 500,
      "def": 1500,
      "id": 86988864,
      "level": 3
    },
    {
      "humanReadableCardType": "Flip Effect Monster",
      "typeline": [
        "Insect",
        "Flip",
        "Effect"
      ],
      "race": "Insect",
      "type": "Flip Effect Monster",
      "frameType": "effect",
      "name": "4-Starred Ladybug of Doom",
      "attribute": "WIND",
      "desc": "FLIP: Destroy all Level 4 monsters your opponent controls.",
      "atk": 800,
      "def": 1200,
      "id": 83994646,
      "level": 3
    },
    {
      "humanReadableCardType": "Continuous Spell",
      "race": "Continuous",
      "type": "Spell Card",
      "frameType": "spell",
      "name": "7",
      "desc": "When there are 3 face-up \"7\" cards on your side of the field, draw 3 cards from your Deck. Then destroy all \"7\" cards. When this card is sent directly from the field to your Graveyard, increase your Life Points by 700 points.",
      "id": 67048711
    },
    {
      "humanReadableCardType": "Normal Monster",
      "typeline": [
        "Fish",
        "Normal"
      ],
      "race": "Fish",
      "type": "Normal Monster",
      "frameType": "normal",
      "name": "7 Colored Fish",
      "attribute": "WATER",
      "desc": "A rare rainbow fish that has never been caught by mortal man.",
      "atk": 1800,
      "def": 800,
      "id": 23771716,
      "level": 4
    },
    {
      "humanReadableCardType": "Equip Spell",
      "race": "Equip",
      "type": "Spell Card",
      "frameType": "spell",
      "name": "7 Completed",
      "desc": "Activate this card by choosing ATK or DEF; equip only to a Machine monster. It gains 700 ATK or DEF, depending on the choice.",
      "id": 86198326
    },
    {
      "humanReadableCardType": "Effect Monster",
      "typeline": [
        "Insect",
        "Effect"
      ],
      "race": "Insect",
      "type": "Effect Monster",
      "frameType": "effect",
      "name": "8-Claws Scorpion",
      "attribute": "DARK",
      "desc": "Once per turn, you can flip this card into face-down Defense Position. When this card attacks an opponent's face-down Defense Position monster, this card's ATK becomes 2400 during damage calculation only.",
      "atk": 300,
      "def": 200,
      "id": 14261867,
      "level": 2
    },


// rest of the data
"""


# BANLIST

## Forbidden Cards (maxLegal = 0)
Chaos Emperor Dragon - Envoy of the End
Fiber Jar
Magical Scientist
Makyura the Destructor
Witch of the Black Forest
Yata-Garasu
Butterfly Dagger - Elma
Change of Heart
Confiscation
Dark Hole
Harpie's Feather Duster
Mirage of Nightmare
Monster Reborn
Painful Choice
Raigeki
The Forceful Sentry
Imperial Order

## Forbidden Cards (maxLegal=1)
Black Luster Soldier - Envoy of the Beginning
Breaker the Magical Warrior
Cyber Jar
Dark Magician of Chaos
D.D. Warrior Lady
Exodia the Forbidden One
Exiled Force
Injection Fairy Lily
Jinzo
Left Arm of the Forbidden One
Left Leg of the Forbidden One
Morphing Jar
Protector of the Sanctuary
Reflect Bounder
Right Arm of the Forbidden One
Right Leg of the Forbidden One
Sacred Phoenix of Nephthys
Sangan
Sinister Serpent
Tribe-Infecting Virus
Twin-Headed Behemoth
Card Destruction
Delinquent Duo
Graceful Charity
Heavy Storm
Lightning Vortex
Mage Power
Mystical Space Typhoon
Pot of Greed
Premature Burial
Snatch Steal
Swords of Revealing Light
United We Stand
Call of the Haunted
Ceasefire
Deck Devastation Virus
Magic Cylinder
Mirror Force
Reckless Greed
Ring of Destruction
Torrential Tribute

## SEMI LIMITED (maxLegal=2)
Abyss Soldier
Dark Scorpion - Chick the Yellow
Manticore of Darkness
Marauding Captain
Night Assailant
Vampire Lord
Creature Swap
Emergency Provisions
Level Limit - Area B
Nobleman of Crossout
Reinforcement of the Army
Upstart Goblin
Good Goblin Housekeeping
Gravity Bind
Last Turn

