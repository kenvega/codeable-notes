import { useEffect, useState } from "react";

// This could throw an error and a white screen would appear in the whole page
// because there is no Error Boundary to catch it
const DangerWithoutErrorBoundary = () => {
  const [count, setCount] = useState(10);

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

export default DangerWithoutErrorBoundary;
