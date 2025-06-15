"use client";
import useRealVh from "@/app/hooks/useRealVh";

export default function MainWrapper({ children }) {
  const styles = {
    main: "flex flex-col h-[calc(var(--vh)_*_100)] w-screen",
  };

  useRealVh();

  return <main className={styles.main}>{children}</main>;
}
