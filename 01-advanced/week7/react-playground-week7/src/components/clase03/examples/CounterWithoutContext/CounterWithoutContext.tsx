import * as React from "react";
import Display from "./Display";
import IncrementButton from "./IncrementButton";

function CounterWithoutContext() {
  const [count, setCount] = React.useState(0);

  function onIncrement() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>
      <Display count={count} />
      <IncrementButton onIncrement={onIncrement} />
    </div>
  );
}

export default CounterWithoutContext;
