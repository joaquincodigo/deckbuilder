"use client";

import { useEffect, useState } from "react";
// import { names } from "./names.js";

import { Grid } from "react-window";

const names = [
  "jhon",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "jhon",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "jhon",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "jhon",
  "jhon",
  "jhon",
  "jhon",
  "jhon",
  "jhon",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
  "elisa,",
  "james",
  "foko",
  "rudolf",
  "joanna",
  "reiina,",
  "sarama",
];

function CellComponent({ list, columnIndex, rowIndex, style }) {
  const itemIndex = rowIndex * 3 + columnIndex;

  return (
    <div className="truncate bg-amber-200 border-1" style={style}>
      {itemIndex} {list[itemIndex]}
    </div>
  );
}

export default function Example2() {
  const [list, setList] = useState(names);

  const addItem = () => {
    const now = new Date();
    const nowString = now.toLocaleTimeString();
    setList((prev) => [...prev, `Name ${nowString}`]);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <>
      <button
        className="bg-blue-500 text-white p-2 rounded-full"
        onMouseDown={() => addItem()}
      >
        Add item
      </button>

      <Grid
        cellComponent={CellComponent}
        cellProps={{ list }}
        columnCount={3}
        columnWidth={100}
        rowCount={Math.ceil(list.length / 3)}
        rowHeight={100}
        style={{
          width: 320, // total grid width
          height: 400, // total grid height
          border: "1px solid black",
          backgroundColor: "#f0f0f0",
        }}
      />
    </>
  );
}
