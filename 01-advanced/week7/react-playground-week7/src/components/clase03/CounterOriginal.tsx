import { useState, createContext } from "react";
import Display from "./examples/CounterWithContext/Display";
import IncrementButton from "./examples/CounterWithContext/IncrementButton";

// creas el contexto y le pasas un valor por defecto
export const CountContext = createContext({
  count: 0,
  incrementCount: () => {},
});

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  // se provee el contexto con CountContext.Provider
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

export default Counter;
