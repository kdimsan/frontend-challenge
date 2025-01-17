"use client";
import { FilterType } from "@/types/filterTypes";
import { PriorityType } from "@/types/priorityType";
import React, { createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityType.NEW,
  setPriority: (value: PriorityType) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export function FiltersContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityType.POPULARITY);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setSearch,
        setPage,
        setType,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
