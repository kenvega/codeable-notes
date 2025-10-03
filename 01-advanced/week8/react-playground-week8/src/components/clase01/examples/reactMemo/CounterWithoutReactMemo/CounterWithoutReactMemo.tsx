import * as React from "react";
import DisplayWithoutReactMemo from "./DisplayWithoutReactMemo";
import FooterWithoutReactMemo from "./FooterWithoutReactMemo";

export default function CounterWithoutReactMemo() {
  console.log("CounterWithoutReactMemo render");
  const [count, setCount] = React.useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <main className="app">
      <h1>Counter Without React Memo</h1>
      <DisplayWithoutReactMemo count={count} />
      <button onClick={handleIncrement}>Increment</button>
      <FooterWithoutReactMemo />
    </main>
  );
}
