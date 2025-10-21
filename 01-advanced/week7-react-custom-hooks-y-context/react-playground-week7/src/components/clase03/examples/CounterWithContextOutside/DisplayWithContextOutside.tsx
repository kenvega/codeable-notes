import { useContext } from "react";
import { CountContext } from "./CountProvider";

const DisplayWithContenxtOutside = () => {
  const { count } = useContext(CountContext);
  return <p className="count">Count: {count}</p>;
};

export default DisplayWithContenxtOutside;
