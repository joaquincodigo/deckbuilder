"use client";

import { ScreenProvider } from "./context/ScreenContext";
import ScreensContainer from "./components/ScreensContainer";
import DeckTab from "./components/tabs/DeckTab";
import AllCardsTab from "./components/tabs/AllCardsTab";
import TabsBackground from "./components/tabs/TabsBackground";

export default function Page() {
  const styles = {
    page: "h-full w-screen pb-16 flex flex-col bg-purple-500",
  };

  return (
    <ScreenProvider>
      <div data-component="Page" className={styles.page}>

        <ScreensContainer />
        <DeckTab />
        <AllCardsTab />
        <TabsBackground />

      </div>
    </ScreenProvider>
  );
}
