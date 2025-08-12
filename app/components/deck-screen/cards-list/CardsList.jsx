"use client";

import { useState, useEffect } from "react";
import Card from "@/app/components/ui/Card";
import CardModal from "../../modals/CardModal";

export default function CardsList() {
  const [cards, setCards] = useState([]);
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);

  useEffect(() => {
    fetch("/testing-cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data.cards));
  }, []);

  const styles = {
    grid: "flex-grow grid grid-cols-3 gap-y-2 gap-x-2 overflow-y-auto touch-pan-y bg-amber-800 mt-3",
  };

  return (
    <div className={styles.grid}>
      {cards.map((card, i) => (
        <Card
          key={i}
          width={108}
          name={card.name}
          ability={card.ability}
          atk={card.atk}
          def={card.defense}
        />
      ))}
      {/* {isCardModalVisible && <CardModal />} */}
    </div>
  );
}
