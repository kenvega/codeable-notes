-- Listar todas las columnas de la tabla genres
SELECT
  *
FROM
  genres;

-- Listar todas las columnas de la tabla movies
SELECT
  *
FROM
  movies;

-- Listar el title y release_date de todas las películas estrenadas en 1995-01-01
SELECT
  title,
  release_date
FROM
  movies
WHERE
  release_date = '1995-01-01';

-- Listar el title y release_date de todas las películas estrenadas entre 1996-01-01 y 1998-01-01
SELECT
  title,
  release_date
FROM
  movies
WHERE
  release_date > '1996-01-01'
  AND release_date < '1998-01-01';

-- Listar el title de todas las películas que empiezan con la letra 'F'
SELECT
  title
FROM
  movies
WHERE
  title LIKE 'F%';

-- Listar el title de la película más antigua
SELECT
  title,
  release_date
FROM
  movies
ORDER BY
  release_date ASC
LIMIT
  1;

-- Listar el title y release_date de todas las películas ordenadas desde la más nueva hasta la más antigua
SELECT
  title,
  release_date
FROM
  movies
ORDER BY
  release_date DESC;

-- Listar todos los años en donde se estrenó alguna película sin tener valores repetidos
SELECT
  DISTINCT EXTRACT(
    YEAR
    FROM
      release_date
  ) AS year
FROM
  movies;

-- Listar la cantidad de usuarios agrupados por hombres y mujeres
SELECT
  gender,
  COUNT(*) AS user_count
FROM
  users
GROUP BY
  gender;

-- Listar la cantidad de usuarios agrupados por edad
SELECT
  age,
  COUNT(*) AS user_count
FROM
  users
GROUP BY
  age;

-- Lista la edad promedio de los usuarios agrupados por género
SELECT
  gender,
  AVG(age) AS average_age
FROM
  users
GROUP BY
  gender;