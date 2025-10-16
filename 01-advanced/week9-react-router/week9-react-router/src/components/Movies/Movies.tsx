import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getMovies } from "../../services/moviesService";

type Movie = {
  id: number;
  name: string;
  description: string;
};

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // al montar el componente en la pagina
    document.body.style.backgroundColor = "#a9c26aff";

    getMovies().then((moviesData) => {
      setMovies(moviesData as Movie[]);
    });

    // al desmontar el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <p>Shows a list of fetched movies.</p>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
          </li>
        ))}
      </ul>

      <Link to="/">Home</Link>

      <Outlet />
    </div>
  );
}

export default Movies;
