"use client";

import { createContext, useContext, useState } from "react";

const ScreenContext = createContext();

export function ScreenProvider({ children }) {
  const [currentScreen, setCurrentScreen] = useState("AllCardsScreen");
  return (
    <ScreenContext.Provider value={{ currentScreen, setCurrentScreen }}>
      {children}
    </ScreenContext.Provider>
  );
}

export function useScreen() {
  const ctx = useContext(ScreenContext);
  if (!ctx) throw new Error("useScreen must be used inside ScreenProvider");
  return ctx;
}
