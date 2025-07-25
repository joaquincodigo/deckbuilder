"use client";

import { useState } from "react";
import SaveDeckInput from "@/app/components/deck-screen/save-deck-form/SaveDeckInput";
import SaveDeckButton from "@/app/components/deck-screen/save-deck-form/SaveDeckButton";

const styles = {
  form: "flex w-full",
};

export default function SaveDeckForm() {
  const [deckName, setDeckName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deckName.trim()) return; // ToDo: Warning Toast

    const stored = localStorage.getItem("decks");
    const decks = stored ? JSON.parse(stored) : [];

    if (!decks.includes(deckName)) {
      decks.push(deckName);
      localStorage.setItem("decks", JSON.stringify(decks));
    }

    setDeckName("");
  };

  const handleChange = (e) => {
    setDeckName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <SaveDeckInput onChange={handleChange} value={deckName} />
      <SaveDeckButton />
    </form>
  );
}
