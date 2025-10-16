import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

type Game = {
  id: number;
  name: string;
  description: string;
};

function Games() {
  const games = useLoaderData() as Game[];

  useEffect(() => {
    // al montar el componente en la pagina
    document.body.style.backgroundColor = "#407dc4ff";

    // al desmontar el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Games page</h1>
      <p>Shows a list of fetched games.</p>

      <ul>
        {games?.map((game) => (
          <li key={game.id}>
            <Link to={`/games/${game.id}`}>{game.name}</Link>
          </li>
        ))}
      </ul>

      <Link to="/">Home</Link>
    </div>
  );
}

export default Games;
