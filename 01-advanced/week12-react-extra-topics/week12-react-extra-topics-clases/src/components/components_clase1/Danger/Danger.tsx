import { useEffect, useState } from "react";

const Danger = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  if (count === 0) {
    throw new Error("Algo salió mal");
  }

  return (
    <div className="danger">
      <p>Este componente lanzará un error en {count} segundos</p>
    </div>
  );
};

export default Danger;
