import { getPokemon } from "../../services/pokeapi-service";
import Input from "../Input";
import { useState } from "react";
import PokemonData from "../PokemonData";
import {
  createFavorite,
  removeFavorite,
} from "../../services/favorites-service";

export type PokemonDataProps = {
  dataPokemon: {
    id: number;
    name: string;
    sprites: {
      other: {
        "official-artwork": {
          front_default: string;
        };
      };
    };
    types: { slot: number; type: { name: string } }[];
    height: number;
    weight: number;
  };
};

type StateProps = {
  status: "idle" | "success" | "error" | "pending";
  data: PokemonDataProps["dataPokemon"] | null;
  error: string | null;
};

type FavoriteProps = {
  id?: number;
  pokemon_name: string;
  pokemon_id: number;
  pokemon_type: string;
  pokemon_avatar_url: string;
};

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<StateProps>({
    status: "idle",
    data: null,
    error: null,
  });

  // variables derivadas (status, data, error)
  const { status, data: pokemon, error } = state;

  const [favorites, setFavorites] = useState<FavoriteProps[]>([]);

  function handleAddFavorite() {
    if (!pokemon) return;
    const data: FavoriteProps = {
      pokemon_name: pokemon.name,
      pokemon_id: pokemon.id,
      pokemon_type: pokemon.types[0].type.name,
      pokemon_avatar_url:
        pokemon.sprites.other["official-artwork"].front_default,
    };
    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch((error) => console.log(error));
  }

  function handleRemoveFavorite() {
    if (!pokemon) return;

    const favoriteToRemove = favorites.find(
      (favorite) => favorite.pokemon_name === pokemon.name
    );

    if (!favoriteToRemove || !favoriteToRemove.id) return;

    removeFavorite(favoriteToRemove.id).then(() => {
      const newFavorites = favorites.filter((fav) => {
        return fav.pokemon_name !== favoriteToRemove.pokemon_name;
      });
      setFavorites(newFavorites);
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (query.length === 0) {
      return;
    }
    setState({ status: "pending", data: null, error: null });
    getPokemon(query)
      .then((data) => {
        setState({ status: "success", data, error: null });
      })
      .catch((error) => {
        console.error("Pokemon no existe! Intenta de nuevo", error);
        setState({
          status: "error",
          data: null,
          error: "El pokemon no existe! Intenta de nuevo",
        });
      });
  }

  const isFavorite = favorites.find((fav) => fav.pokemon_name === pokemon?.name)
    ? true
    : false;

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
      {status === "idle" && "Ready to search"}
      {status === "pending" && "Loading..."}
      {status === "success" && pokemon && (
        <PokemonData
          dataPokemon={pokemon}
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
          isFavorite={isFavorite}
        />
      )}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SearchPage;
