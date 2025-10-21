import React from "react";
import PokemonCard, { type Pokemon } from "./PokemonCard.tsx";
import Spinner from "./Spinner";
import styles from "./ExampleFetch02.module.css";

const ENDPOINT = "https://test-api-codeable.up.railway.app/api/pokemons";

// pokemonList
function ExampleFetch02() {
  // const pokemons: Pokemon[] = [];
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([])
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'error' | 'success'>('idle')

  // al callback del useEffect no puedes ponerle async delante
  React.useEffect(() => {
    setStatus('loading')

    fetch(ENDPOINT)
      .then((response) => response.json())
      .then(data => {
        if (data.ok) {
          setPokemons(data.pokemons)
          setStatus('success')
        } else {
          throw Error(`La respuesta del servidor no fue exitosa: ${JSON.stringify(data)}`)
        }
      })
      .catch(error => {
        // a este catch se llega por si el fetch de por si falla
        // o tambien llegarias aqui por si llegas por el error manual que se levanta
        console.error('Error fetching pokemons:', error)
        setStatus('error')
      }) 
  }, [])

  return (
    <div className={styles.wrapper}>
      {status === 'loading' && <Spinner />}
      {status === 'success' && pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          imageUrl={pokemon.image_url}
          name={pokemon.name}
          types={pokemon.types}
        />
      ))}
      {status === 'error' && <p>Something went wrong</p>}
    </div>
  );
}

export default ExampleFetch02;