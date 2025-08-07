"use client";
import { useState, useRef, useEffect } from "react";
import PencilIcon from "./PencilIcon";
import Button from "@/app/components/ui/Button";
import TickIcon from "./TickIcon";

export default function DeckName({ deckName, setDeckName }) {
  const [isEditable, setIsEditable] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditable]);

  const styles = {
    container: "flex items-center gap-2",
    form: "flex gap-2",
    input: "flex-1 bg-white border border-black px-2 py-1",
    name: "font-bold text-lg",
    editButton: "bg-green-600 rounded p-0.5",
    confirmButton:
      "bg-green-600 rounded  aspect-square h-9 flex justify-center items-center",
  };

  const handleEditClick = () => {
    if (!isEditable) {
      setIsEditable(true);
    }
  };

  const handleSubmit = (e) => {
    // SAVE DECK NAME LOGIC
    e.preventDefault();
    setIsEditable(false);
  };

  if (isEditable) {
    return (
      <form className={styles.form}>
        <input type="text" className={styles.input} ref={inputRef} />
        <Button onClick={handleSubmit} className={styles.confirmButton}>
          <TickIcon />
        </Button>
      </form>
    );
  }

  return (
    <span className={styles.container}>
      <p className={styles.name} onClick={handleEditClick}>
        Chaos Control
      </p>
      <Button className={styles.editButton} onClick={handleEditClick}>
        <PencilIcon />
      </Button>
    </span>
  );
}
