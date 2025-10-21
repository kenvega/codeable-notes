import { useState, createContext } from "react";
import DisplayWithContext from "./DisplayWithContext";
import ButtonWithContext from "./ButtonWithContext";

// 1. creas el contexto y le pasas un valor por defecto -- necesitas exportarlo para consumirlo en los hijos
export const CountContext = createContext({
  count: 0,
  onIncrement: () => {},
});

const CounterWithContext = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  // 2. provees el contexto con los valores que consumiran los hijos a traves de CountContext.Provider -- llegara a todo los componentes que estén debajo
  return (
    <CountContext.Provider value={{ count: count, onIncrement: onIncrement }}>
      <div className="container">
        <h1>Counter Component using context</h1>
        <DisplayWithContext />
        <ButtonWithContext />
      </div>
    </CountContext.Provider>
  );
};

export default CounterWithContext;
