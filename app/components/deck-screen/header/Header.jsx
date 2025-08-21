"use client";

import DeckName from "./deck-name/DeckName";
import Menu from "./menu/Menu";
import MenuButton from "./menu/buttons/MenuButton";
import Heading from "./heading/Heading";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const styles = {
    header: "p-1.5",
    headingContainer: `flex gap-x-3 items-top ${isMenuOpen ? "mb-3" : ""}`,
  };

  return (
    <div className={styles.header}>
      <div className={styles.headingContainer}>
        <Heading />
        <MenuButton onClick={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>
      <Menu isOpen={isMenuOpen} />
      <DeckName />
    </div>
  );
}
