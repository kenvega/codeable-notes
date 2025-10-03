import * as React from "react";
import "./App.css";
import SpecialButton from "./SpecialButton";

export default function App() {
  const [count, setCount] = React.useState(0);

  // de esta manera el SpecialButton ya no se vuelve a renderizar
  const handleSpecialClick = React.useMemo(() => {
    return function () {
      const random = Math.floor(Math.random() * 100);
      setCount((prev) => prev + random);
    };
  }, []);

  return (
    <div className="app">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <SpecialButton onClick={handleSpecialClick}>+random</SpecialButton>
    </div>
  );
}
