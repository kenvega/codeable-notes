import { Link, useLoaderData } from "react-router-dom";

type Game = {
  id: number;
  name: string;
  description: string;
};

function GameDetail() {
  const game = useLoaderData() as Game;

  return (
    <div>
      <h1>Games detail</h1>
      <p>Details for game {game.name}</p>
      <ul>
        <li>
          <strong>Id:</strong> {game.id}
        </li>
        <li>
          <strong>Name:</strong> {game.name}
        </li>
        <li>
          <strong>Description:</strong> {game.description}
        </li>
      </ul>

      <Link to="/">Home</Link>
    </div>
  );
}

export default GameDetail;
