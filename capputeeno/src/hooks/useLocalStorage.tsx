import { useState } from "react";

export function useLocalStorage<G>(item: string) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(item) ?? "")
  );

  const updateLocalStorage = (newValue: G) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };
  return {
    value,
    updateLocalStorage,
  };
}
