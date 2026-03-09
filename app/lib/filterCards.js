export default function filterCards(formData, allCards) {
  if (!formData) return allCards;

  const cardType = formData.cardType || ""; // '', 'monster', 'spell', 'trap'

  // shared
  const query = (formData?.query || "").trim().toLowerCase();

  // monster filters
  const category = formData?.category; // "any" | "Normal" | "Effect" | "Fusion" | "Ritual"
  const attribute = formData?.attribute;
  const monsterType = formData?.monsterType; // matches card.race
  const levelCmp = formData?.levelComparisonSelect;
  const levelVal = formData?.level;

  const atkCmp = formData?.attackComparisonSelect;
  const atkVal = formData?.atk;

  const defCmp = formData?.defenseComparisonSelect;
  const defVal = formData?.def;

  // spell/trap filters
  const spellType = formData?.spellType;
  const trapType = formData?.trapType;

  function cmp(value, target, mode) {
    if (!target) return true;

    const v = Number(value);
    const t = Number(target);

    if (Number.isNaN(v) || Number.isNaN(t)) return true;

    if (mode === "equal") return v === t;
    if (mode === "less") return v < t;
    if (mode === "greater") return v > t;

    return true;
  }

  function getCardKind(card) {
    const t = card.type.toLowerCase();

    if (t.includes("monster")) return "monster";
    if (t.includes("spell")) return "spell";
    if (t.includes("trap")) return "trap";

    return "unknown";
  }

  function getMonsterCategory(type) {
    const parts = type.split(" ");
    // "Normal Monster", "Effect Monster", "Fusion Monster", etc
    // "Flip Effect Monster" -> ["Flip","Effect","Monster"]
    return parts[0] === "Flip" ? parts[1] : parts[0];
  }

  const filtered = allCards.filter((card) => {
    const kind = getCardKind(card);

    // primary cardType selector
    if (cardType && cardType !== kind) return false;

    // text search
    if (query) {
      const name = card.name.toLowerCase();
      const desc = card.desc.toLowerCase();

      if (!name.includes(query) && !desc.includes(query)) return false;
    }

    // MONSTER
    if (kind === "monster") {
      if (cardType === "" || cardType === "monster") {
        if (category && category !== "any") {
          const cardCategory = getMonsterCategory(card.type);
          if (cardCategory !== category) return false;
        }

        if (attribute && attribute !== "any") {
          if (card.attribute !== attribute) return false;
        }

        if (monsterType && monsterType !== "any") {
          if (card.race !== monsterType) return false;
        }

        if (levelVal && levelVal !== "any") {
          if (!cmp(card.level, levelVal, levelCmp)) return false;
        }

        if (atkVal) {
          if (!cmp(card.atk, atkVal, atkCmp)) return false;
        }

        if (defVal) {
          if (!cmp(card.def, defVal, defCmp)) return false;
        }
      }
    }

    // SPELL
    if (kind === "spell") {
      if (cardType === "" || cardType === "spell") {
        if (spellType && spellType !== "any") {
          if (card.race !== spellType) return false;
        }
      }
    }

    // TRAP
    if (kind === "trap") {
      if (cardType === "" || cardType === "trap") {
        if (trapType && trapType !== "any") {
          if (card.race !== trapType) return false;
        }
      }
    }

    return true;
  });

  return filtered;
}
