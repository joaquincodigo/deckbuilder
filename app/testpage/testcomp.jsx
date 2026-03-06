"use client";

import { useState, useMemo, useEffect } from "react";

export default function TestComp({ cards }) {

  const [formState, setFormState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFormState(Object.fromEntries(formData.entries()));
  };

  const filteredCards = useMemo(() => {
    return cards.filter((c) =>
      c.name.toLowerCase().includes((formState.query || "").toLowerCase())
    );
  }, [cards, formState]);

  useEffect(() => {
    console.log(filteredCards);
  }, [filteredCards]);
  return (
    <>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          className="border me-2 h-8"
          defaultValue={formState.query || ""}
        />
        <button className="border h-8">Submit</button>
      </form>
      {/* RESULTS */}
      <ul className="my-4">
        {filteredCards?.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </>
  );
}
