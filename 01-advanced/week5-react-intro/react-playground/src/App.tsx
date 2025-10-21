// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card from "./components/Card";

const data = [
  { username: "mica-123", name: "Micaela", position: "Frontend Developer" },
  { username: "si-simon", name: "Simon", position: "Backend Developer" },
  { username: "miguelito", name: "Miguel", position: "Fullstack Developer" },
];

function App() {
  return (
    <div>
      <div>
        <Card name="asdf" position="23" />
      </div>

      {/* renderizar una lista de datos a una de componentes */}
      <ul className="card-list">
        {data.map((person) => {
          return <Card name={person.name} position={person.position} />;
        })}
      </ul>
    </div>
  );
}

export default App;
