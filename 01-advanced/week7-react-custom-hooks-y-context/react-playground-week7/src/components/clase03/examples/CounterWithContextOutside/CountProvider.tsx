import { useState, createContext } from "react";

export const CountContext = createContext({
  count: 0,
  onIncrement: () => {},
});

type CountProviderProps = {
  children: React.ReactNode;
};

const CountProvider = ({ children }: CountProviderProps) => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count: count, onIncrement: onIncrement }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
