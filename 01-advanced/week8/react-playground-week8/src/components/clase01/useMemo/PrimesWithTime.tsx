import * as React from "react";
import "./App.css";
import { primesUpTo } from "./primesHelper";
import useTime from "./use-time";

function formatTime(time) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }).format(time);
}

// se estan calculando los numeros primos cada segundo ahora
// a pesar de que number no esta cambiando
//   se siguen recalculando los numeros primos
// pregunta: no seria mejor en estos casos separar los componentes?
export default function PrimesWithTime() {
  const [number, setNumber] = React.useState(2);
  const time = useTime();

  const primes = primesUpTo(number);

  return (
    <div className="app">
      <h1>Números Primos</h1>
      <p>{formatTime(time)}</p>
      <input
        type="number"
        min={2}
        max={100_000}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>
        Existen {primes.length} números primos menores que {number}
      </p>
      <div className="numbers">
        {primes.map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
    </div>
  );
}
