import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { getGames } from "../../services/gamesService";

type Game = {
  id: number;
  name: string;
  description: string;
};

function Games() {
  // const [games, setGames] = useState<Game[]>([]);
  const games = useLoaderData() as Game[];

  console.log(useLoaderData());
  console.log(games);

  useEffect(() => {
    // al montar el componente en la pagina
    document.body.style.backgroundColor = "#407dc4ff";

    // getGames().then((gamesData) => {
    //   setGames(gamesData as Game[]);
    // });

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
            {game.name}:{game.description}
          </li>
        ))}
      </ul>

      <Link to="/">Home</Link>
    </div>
  );
}

export default Games;
