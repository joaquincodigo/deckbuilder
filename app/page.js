"use client";

import { useState } from "react";

import ScreenContainer from "./components/ScreenContainer";
import Nav from "./components/nav/Nav";

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState("DeckScreen");

  const styles = {
    page: "h-screen w-screen flex flex-col bg-purple-500",
  };

  return (
    <div data-component="Page" className={styles.page}>
      <ScreenContainer currentScreen={currentScreen} />
      <Nav setCurrentScreen={setCurrentScreen} />
    </div>
  );
}
