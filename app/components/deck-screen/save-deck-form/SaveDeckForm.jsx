"use client";

import { useState } from "react";
import SaveDeckInput from "@/app/components/deck-screen/save-deck-form/SaveDeckInput";
import SaveDeckButton from "@/app/components/deck-screen/save-deck-form/SaveDeckButton";

const styles = {
  form: "flex w-full",
};

export default function SaveDeckForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const stored = localStorage.getItem("decks");
    const decks = stored ? JSON.parse(stored) : [];

    if (!decks.includes(name)) {
      decks.push(name);
      localStorage.setItem("decks", JSON.stringify(decks));
    }

    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <SaveDeckInput onChange={(e) => setName(e.target.value)} />
      <SaveDeckButton />
    </form>
  );
}
