import { getPokemon } from "../../services/pokeapi-service";
import Input from "../Input";
import { useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getPokemon(query)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="query"
          placeholder="pokemon name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.id}</p>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </div>
      ) : (
        "Ready to search"
      )}
    </div>
  );
};

export default SearchPage;
