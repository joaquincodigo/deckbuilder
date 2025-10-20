"use client";
import { useState, useEffect } from "react";

export default function ComponentName() {
  const [state, setState] = useState(true);

  const styles = {
    myElem: `bg-green-400 w-screen transition-all duration-500 ease-in-out ${state ? "h-0" : "h-24"}`,
  };

  useEffect(() => {
    console.log("state is:", state);
  }, [state]);
  return (
    <>
      <div className={styles.myElem}>I am div</div>
      <button
        className="bg-blue-500 text-white font-bold p-3"
        onClickCapture={() => {
          setState((prev) => !prev);
        }}
      >
        click me
      </button>
    </>
  );
}
