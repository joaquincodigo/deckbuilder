"use client";

import { ScreenProvider } from "./context/ScreenContext";
import useRealVh from "./hooks/useRealVh";
import ScreenContainer from "./components/ScreenContainer";
import DeckTab from "./components/tabs/DeckTab";
import AllCardsTab from "./components/tabs/AllCardsTab";
import TabsBackground from "./components/tabs/TabsBackground";

export default function Page() {
  useRealVh(); // initialize the --vh variable

  const styles = {
    page: "h-[calc(var(--vh)_*_100)] w-screen pb-16 flex flex-col bg-purple-500",
  };

  return (
    <ScreenProvider>
      <div data-component="Page" className={styles.page}>
        <ScreenContainer />
        <DeckTab />
        <AllCardsTab />
        <TabsBackground />
      </div>
    </ScreenProvider>
  );
}
