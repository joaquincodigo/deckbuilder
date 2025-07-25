"use client";
import { useState } from "react";
import FiltersButton from "@/app/components/all-cards-screen/search-form/FiltersButton";
import SearchInput from "@/app/components/all-cards-screen/search-form/SearchInput";
import FiltersPanel from "@/app/components/all-cards-screen/search-form/FiltersPanel";

export default function SearchForm() {
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);
  const toggleFiltersPanel = () => {
    setIsFiltersPanelOpen((prev) => !prev);
  };

  return (
    <form>
      <SearchInput />
      <FiltersButton onClick={toggleFiltersPanel} />
      <FiltersPanel isOpen={isFiltersPanelOpen} />
    </form>
  );
}
