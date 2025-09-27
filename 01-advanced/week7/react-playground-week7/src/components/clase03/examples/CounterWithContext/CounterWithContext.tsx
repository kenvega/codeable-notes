import { useState, createContext } from "react";
import Display from "./Display";
import IncrementButton from "./IncrementButton";

// 1. creas el contexto y le pasas un valor por defecto
export const CountContext = createContext({
  count: 0,
  onIncrement: () => {},
});

const CounterWithContext = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  // 2. provees el contexto con CountContext.Provider -- llegara a todo lo que esté debajo
  return (
    <CountContext.Provider value={{ count: count, onIncrement: onIncrement }}>
      <div className="container">
        <h1>Counter App</h1>
        <Display />
        <IncrementButton />
      </div>
    </CountContext.Provider>
  );
};

export default CounterWithContext;
