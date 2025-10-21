import { useContext } from "react";
import { CountContext } from "./CounterWithContext";

const DisplayWithContenxt = () => {
  const { count } = useContext(CountContext);
  return <p className="count">Count: {count}</p>;
};

export default DisplayWithContenxt;
