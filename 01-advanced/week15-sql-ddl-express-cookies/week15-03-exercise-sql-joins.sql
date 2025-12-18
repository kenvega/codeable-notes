-- Lista el title y los genres de todas las películas
SELECT
  movies.title,
  genres.name
FROM
  movies
  JOIN genres_movies ON movies.id = genres_movies.movie_id
  JOIN genres ON genres.id = genres_movies.genre_id;

-- Lista todos los ids de los usuarios y el nombre de su ocupación
-- Lista el número de películas agrupadas por género
-- Recupera solo el género que tiene más películas asociadas
-- Lista todos los títulos de las películas y el número de géneros asociados que cada una tiene
-- Lista el número de usuarios por ocupación
-- Lista el título de la película y su calificación promedio ordenados desde la mejor calificada hasta la peor calificada
-- Lista la calificación promedio por género
-- Recupera la película más popular de 1995
-- Recupera la edad promedio de los usuarios que han calificado la película "Eye for an Eye (1996)"
-- Lista las 10 mejores películas para Abogados estrenadas entre 1990 y 1995