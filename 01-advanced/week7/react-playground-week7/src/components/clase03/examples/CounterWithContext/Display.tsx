import { useContext } from "react";
import { CountContext } from "./CounterWithContext";

function Display() {
  const { count } = useContext(CountContext);
  return <p className="count">{count}</p>;
}

export default Display;
