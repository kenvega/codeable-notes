import * as React from "react";
import DisplayWithReactMemo from "./DisplayWithReactMemo";
import FooterWithReactMemo from "./FooterWithReactMemo";

export default function CounterWithReactMemo() {
  console.log("CounterWithReactMemo render");

  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <main className="app">
      <h1>Counter With React Memo</h1>
      {/* DisplayWithReactMemo solo deberia re-renderizarse cuando cambiamos 'count' y no cuando cambiamos 'text' */}
      <DisplayWithReactMemo count={count} />
      <button onClick={handleIncrement}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <FooterWithReactMemo />
    </main>
  );
}
