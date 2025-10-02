"use client";

import { List } from "react-window";
import { useEffect, useState } from "react";
import { names } from "./names.js";

// const groupInThree = (array) => {
//   if (array.length % 3 === 0) {
//     for (let i = 0; i < array.length; i + 3) {

//     }
//   } else {
//     for (let i = 0; i < array.length; i + 3) {
//       const element = array[i];
//       console.log(element);
//     }
//   }
// };

function RowComponent({ index, names, style }) {
  return (
    <div
      className="bg-slate-200 flex items-center justify-between"
      style={style}
    >
      {names[index]}
    </div>
  );
}

export default function Example() {
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
        click me
      </button>
      <List
        className="h-[600px] overflow-scroll"
        rowComponent={RowComponent}
        rowCount={list.length}
        rowHeight={25}
        rowProps={{ names: list }}
      />
    </>
  );
}
