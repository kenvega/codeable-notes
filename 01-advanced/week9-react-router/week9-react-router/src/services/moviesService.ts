const movies = [
  { id: 1, name: "Movie 1", description: "Description for Movie 1" },
  { id: 2, name: "Movie 2", description: "Description for Movie 2" },
  { id: 3, name: "Movie 3", description: "Description for Movie 3" },
  { id: 4, name: "Movie 4", description: "Description for Movie 4" },
  { id: 5, name: "Movie 5", description: "Description for Movie 5" },
];

export function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies);
    }, 800);
  });
}

export function getMovie(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find((movie) => movie.id === id);

      if (movie) {
        resolve(movie);
      } else {
        reject(new Error(`Movie with id ${id} not found`));
      }
    }, 800);
  });
}
