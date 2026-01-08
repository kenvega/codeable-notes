-- Lista el title y los genres de todas las películas
SELECT
  movies.title,
  genres.name
FROM
  movies
  JOIN genres_movies ON movies.id = genres_movies.movie_id
  JOIN genres ON genres.id = genres_movies.genre_id;

-- Lista todos los ids de los usuarios y el nombre de su ocupación
SELECT
  users.id,
  occupations.name
FROM
  users
  JOIN occupations ON users.occupation_id = occupations.id;

-- Lista el número de películas agrupadas por género
SELECT
  genres.name,
  COUNT(movies.id) AS number_of_movies
FROM
  genres
  JOIN genres_movies ON genres.id = genres_movies.genre_id
  JOIN movies ON movies.id = genres_movies.movie_id
GROUP BY
  genres.name;

-- Recupera solo el género que tiene más películas asociadas
SELECT
  genres.name,
  COUNT(movies.id) AS number_of_movies
FROM
  genres
  JOIN genres_movies ON genres.id = genres_movies.genre_id
  JOIN movies ON movies.id = genres_movies.movie_id
GROUP BY
  genres.name
ORDER BY
  number_of_movies DESC
LIMIT
  1;

-- Lista todos los títulos de las películas y el número de géneros asociados que cada una tiene
SELECT
  movies.title,
  COUNT(genres.id) AS number_of_genres
FROM
  movies
  JOIN genres_movies ON movies.id = genres_movies.movie_id
  JOIN genres ON genres.id = genres_movies.genre_id
GROUP BY
  movies.title;

-- Lista el número de usuarios por ocupación
SELECT
  occupations.name,
  COUNT(users.id) AS number_of_users
FROM
  occupations
  JOIN users ON occupations.id = users.occupation_id
GROUP BY
  occupations.name;

-- Lista el título de la película y su calificación promedio ordenados desde la mejor calificada hasta la peor calificada
SELECT
  movies.title,
  AVG(ratings.rating) AS average_rating
FROM
  movies
  JOIN ratings ON movies.id = ratings.movie_id
GROUP BY
  movies.title
ORDER BY
  average_rating DESC;

-- Lista la calificación promedio por género
SELECT
  genres.name,
  AVG(ratings.rating) AS average_rating
FROM
  genres
  JOIN genres_movies ON genres.id = genres_movies.genre_id
  JOIN movies ON movies.id = genres_movies.movie_id
  JOIN ratings ON movies.id = ratings.movie_id
GROUP BY
  genres.name;

-- Recupera la película más popular de 1995
SELECT
  movies.title,
  COUNT(ratings.id) AS number_of_ratings
FROM
  movies
  JOIN ratings ON movies.id = ratings.movie_id
WHERE
  movies.release_year = 1995
GROUP BY
  movies.title
ORDER BY
  number_of_ratings DESC
LIMIT
  1;

-- Recupera la edad promedio de los usuarios que han calificado la película "Eye for an Eye (1996)"
SELECT
  AVG(users.age) AS average_age
FROM
  users
  JOIN ratings ON users.id = ratings.user_id
  JOIN movies ON ratings.movie_id = movies.id
WHERE
  movies.title = 'Eye for an Eye (1996)';

-- Lista las 10 mejores películas para Abogados estrenadas entre 1990 y 1995
SELECT
  movies.title,
  AVG(ratings.rating) AS average_rating
FROM
  movies
  JOIN ratings ON movies.id = ratings.movie_id
  JOIN users ON ratings.user_id = users.id
  JOIN occupations ON users.occupation_id = occupations.id
WHERE
  occupations.name = 'Lawyer'
  AND movies.release_date > '1990-01-01'
  AND movies.release_date < '1996-01-01'
GROUP BY
  movies.title
ORDER BY
  average_rating DESC
LIMIT
  10;