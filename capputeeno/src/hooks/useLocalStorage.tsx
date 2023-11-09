import { useEffect, useState } from "react";

export function useLocalStorage<G>(item: string, initialValue: G) {
  const [value, setValue] = useState<G>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let value = localStorage.getItem(item);
    if (value) setValue(JSON.parse(value));
  }, [window]);

  const updateLocalStorage = (newValue: G) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };
  return {
    value,
    updateLocalStorage,
  };
}
