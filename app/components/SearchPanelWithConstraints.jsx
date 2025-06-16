"use client";
import { useRef } from "react";
import SearchPanel from "@/app/components/SearchPanel";

export default function SearchPanelWithConstraints() {
  const styles = {
    constraintArea: "border border-2 border-red-500 rounded-xl h-screen mt-10 mb-10",
  };

  const ref = useRef(null);

  return (
    <div ref={ref} className={styles.constraintArea}>
      <SearchPanel constraintRef={ref} />
    </div>
  );
}
