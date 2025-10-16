import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getMovie } from "../../services/moviesService";

type Movie = {
  id: number;
  name: string;
  description: string;
};

function MovieDetail() {
  const { movieId } = useParams<{ movieId: string }>();

  const location = useLocation();

  console.log("movieId", movieId);

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const updatedMovie = location.state?.updatedMovie;

    if (updatedMovie) {
      setMovie(updatedMovie);
      return;
    } else if (movieId) {
      getMovie(parseInt(movieId)).then((movieData) => {
        setMovie(movieData as Movie);
      });
    }
  }, [movieId, location.state]);

  return (
    <div>
      <h1>Movies detail</h1>
      <p>Details for game {movie?.name}</p>
      <ul>
        <li>
          <strong>Id:</strong> {movie?.id}
        </li>
        <li>
          <strong>Name:</strong> {movie?.name}
        </li>
        <li>
          <strong>Description:</strong> {movie?.description}
        </li>
      </ul>

      <Link to={`/movies/${movie?.id}/edit`}>Edit movie</Link>
    </div>
  );
}

export default MovieDetail;
