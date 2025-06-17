"use client";
import useRealVh from "@/app/hooks/useRealVh";

export default function MainWrapper({ children }) {
  const styles = {
    main: "relative bg-green-500 flex flex-col h-[calc(var(--vh)_*_100)] w-screen overflow-hidden",
  };

  useRealVh(); // Allow us to get the real VH units from the real viewport size

  return <main className={styles.main}>{children}</main>;
}
