"use client";
import { useRef } from "react";
import SearchPanel from "@/app/components/SearchPanel";
import { useStableSize } from "@/app/hooks/useStableSize";

export default function SearchPanelWithConstraints() {
  const styles = {
    wrapper: "bg-pink-500 inset-0 absolute bg-green-400 top-0 left-0 h-full pt-[calc(var(--vh)*30)] overflow-hidden z-10",
    constraintArea: "relative h-full border border-2 border-white rounded-xl",
  };

  const ref = useRef(null);
  const ready = useStableSize(ref); // Unstable layout size causes constraint area of the SearchPanel handle to be incorrect causing a bug where the handle canont move to the bottom of the page. This hook waits for the layout to settle to emit a "ready" mark.

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styles.constraintArea}>
        {ready && <SearchPanel constraintRef={ref} />}
      </div>
    </div>
  );
}
