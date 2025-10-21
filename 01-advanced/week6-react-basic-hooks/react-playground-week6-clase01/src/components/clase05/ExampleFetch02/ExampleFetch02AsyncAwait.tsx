import React from "react";
import PokemonCard, { type Pokemon } from "./PokemonCard.tsx";
import Spinner from "./Spinner";
import styles from "./ExampleFetch02.module.css";

const ENDPOINT = "https://test-api-codeable.up.railway.app/api/pokemons";

// pokemonList
function ExampleFetch02AsyncAwait() {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([])
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'error' | 'success'>('idle')

  React.useEffect(() => {
    setStatus('loading')

    async function fetchPokemons() {
      try {
        const response = await fetch(ENDPOINT)
        const data = await response.json()

        if (data.ok) {
          setPokemons(data.pokemons)
          setStatus('success')
        } else {
          throw Error(`La respuesta del servidor no fue exitosa: ${JSON.stringify(data)}`)
        }
      } catch (error) {
        console.error('Error fetching pokemons:', error)
        setStatus('error')
      }
    }

    fetchPokemons()
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

export default ExampleFetch02AsyncAwait;