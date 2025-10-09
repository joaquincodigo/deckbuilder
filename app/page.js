"use client";

import { ScreenProvider } from "./context/ScreenContext";
import useRealVh from "./hooks/useRealVh";
import ScreenContainer from "./components/ScreenContainer";
import Nav from "./components/nav/Nav";

export default function Page() {
  useRealVh(); // initialize the --vh variable

  const styles = {
    page: "h-[calc(var(--vh)_*_100)] w-screen flex flex-col bg-purple-500",
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
