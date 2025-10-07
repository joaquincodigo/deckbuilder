"use client";
import { useState } from "react";

import EdgeIndicator from "./edge-indicator/EdgeIndicator";
import Header from "./header/Header";
import CardsList from "./cards-list/CardsList";
import { use } from "react";

export default function AllCardsScreen() {
  const styles = {
    body: "w-screen h-screen flex flex-row touch-pan-y",
    outerWrapper: "relative flex flex-col w-full",
  };

  const [searchFormData, setSearchFormData] = useState({});

  return (
    <div className={styles.body}>
      <EdgeIndicator />
      <div className={styles.outerWrapper}>
        <Header setSearchFormData={setSearchFormData} />
        <CardsList searchFormData={searchFormData}/>
      </div>
    </div>
  );
}
