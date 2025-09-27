import { useContext } from "react";
import { CountContext } from "./CountProvider";

const ButtonWithContextOutside = () => {
  const { onIncrement } = useContext(CountContext);

  return (
    <button type="button" className="button" onClick={onIncrement}>
      Increment button
    </button>
  );
};

export default ButtonWithContextOutside;
