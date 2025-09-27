import { useContext } from "react";
import { CountContext } from "./CounterWithContext";

function IncrementButton() {
  const { onIncrement } = useContext(CountContext);

  return (
    <button type="button" className="button" onClick={onIncrement}>
      Increment
    </button>
  );
}

export default IncrementButton;
