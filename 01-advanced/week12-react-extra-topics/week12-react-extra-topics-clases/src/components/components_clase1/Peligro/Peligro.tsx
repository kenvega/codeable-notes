import { useState } from "react";

export default function Peligro() {
  const [error, setError] = useState(false);

  if (error) throw new Error("Algo malió sal");

  return (
    <div>
      ¿Qué hace este botón 🤔?{" "}
      <button onClick={() => setError(true)}>💣</button>
    </div>
  );
}
