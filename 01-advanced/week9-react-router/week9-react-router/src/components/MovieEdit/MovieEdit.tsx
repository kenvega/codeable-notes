import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../../services/moviesService";

type Movie = {
  id: number;
  name: string;
  description: string;
};

const MovieEdit = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (movieId) {
      getMovie(parseInt(movieId)).then((movieData) => {
        const movie = movieData as Movie;
        setMovie(movie);
        setName(movie.name);
        setDescription(movie.description);
      });
    }
  }, [movieId]);

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleEdit = () => {
    if (movie) {
      const updatedMovie = { ...movie, name, description };

      navigate(`/movies/${movie.id}`, { state: { updatedMovie } });
    }
  };

  return (
    <div>
      <h1>Edit Movie</h1>
      <div>
        <label>
          ID:
          <input type="text" value={movie?.id} disabled />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default MovieEdit;
