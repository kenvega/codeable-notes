import { useContext } from "react";
import { CountContext } from "./CounterWithContext";

const ButtonWithContext = () => {
  const { onIncrement } = useContext(CountContext);

  return (
    <button type="button" className="button" onClick={onIncrement}>
      Increment button
    </button>
  );
};

export default ButtonWithContext;
