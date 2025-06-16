"use client";
import { useRef } from "react";
import SearchPanel from "@/app/components/SearchPanel";

export default function SearchPanelWithConstraints() {
  const styles = {
    wrapper: "h-full pt-10 overflow-hidden", // add padding without affecting constraint
    constraintArea: "relative h-full border border-2 border-red-500 rounded-xl",
  };

  const ref = useRef(null);

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styles.constraintArea}>
        <SearchPanel constraintRef={ref} />
      </div>
    </div>
  );
}
