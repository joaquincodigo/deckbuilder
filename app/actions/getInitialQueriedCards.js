"use server";

import { getCardData } from "../lib/getCardData";

export async function getInitialQueriedCards(formData) {
  const allCards = getCardData();

  const cardType = formData.get("cardType") || ""; // '', 'monster', 'spell', 'trap'
  const currentOffset = Number(formData.get("offset") || 0);

  // shared
  const query = (formData.get("query") || "").trim().toLowerCase();

  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  console.log("cardType=", formData.get("cardType"));
  // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING

  // monster filters
  const attribute = formData.get("attribute");
  const monsterType = formData.get("monsterType"); // matches card.race
  const levelCmp = formData.get("levelComparisonSelect");
  const levelVal = formData.get("level");

  const atkCmp = formData.get("attackComparisonSelect");
  const atkVal = formData.get("atk");

  const defCmp = formData.get("defenseComparisonSelect");
  const defVal = formData.get("def");

  // spell/trap filters
  const spellType = formData.get("spellType");
  const trapType = formData.get("trapType");

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

  const initialQueriedCards = filtered.slice(currentOffset, currentOffset + 70);
  const remainingCardsToFetch = Math.max(
    filtered.length - (currentOffset + 70),
    0
  );

  return [initialQueriedCards, currentOffset, remainingCardsToFetch];
}
