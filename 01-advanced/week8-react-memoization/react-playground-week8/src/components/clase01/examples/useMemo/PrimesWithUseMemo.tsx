import * as React from "react";
import { primesUpTo } from "./primesHelper";

// en esta version se deberia cambiar para que solo se haga

export default function Primes() {
  const [number, setNumber] = React.useState(2);

  const primes = primesUpTo(number);

  return (
    <div className="app">
      <h1>Números Primos</h1>
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
