import { FilterContext } from "@/contexts/filterContexts";
import React, { useContext } from "react";

export function useFilter() {
  return useContext(FilterContext);
}
