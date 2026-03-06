import { useEffect } from "react";

export default function TabsBackground({ screen }) {
  useEffect(() => {
    console.log(screen);
  }, [screen]);
  const styles = {
    TabsBackground: `${
      screen === "deck" ? "bg-orange-500" : "bg-blue-900"
    } fixed bottom-0 w-screen h-18`,
  };
  return (
    <div data-components="TabsBackground" className={styles.TabsBackground} />
  );
}
