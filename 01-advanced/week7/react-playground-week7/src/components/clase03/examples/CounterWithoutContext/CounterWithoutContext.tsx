import * as React from "react";
import DisplayWithoutContext from "./DisplayWithoutContext";
import ButtonWithoutContext from "./ButtonWithoutContext";

function CounterWithoutContext() {
  const [count, setCount] = React.useState(0);

  function onIncrement() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>Counter Component without using context</h1>
      <DisplayWithoutContext count={count} />
      <ButtonWithoutContext onIncrement={onIncrement} />
    </div>
  );
}

export default CounterWithoutContext;
