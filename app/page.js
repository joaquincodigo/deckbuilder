"use client"

import { ScreenProvider } from "./context/ScreenContext";
import ScreenContainer from "./components/ScreenContainer";
import Nav from "./components/nav/Nav";

export default function Page() {
  const styles = {
    page: "h-screen w-screen flex flex-col bg-purple-500",
  };

  return (
    <ScreenProvider>
      <div data-component="Page" className={styles.page}>
        <ScreenContainer />
        <Nav />
      </div>
    </ScreenProvider>
  );
}
