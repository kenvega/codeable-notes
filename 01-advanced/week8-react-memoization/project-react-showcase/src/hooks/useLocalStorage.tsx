import { useState } from "react";

const useLocalStorage = (key, initialValue = null) => {
  const [storedValue, setStoredValue] = useState();

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
