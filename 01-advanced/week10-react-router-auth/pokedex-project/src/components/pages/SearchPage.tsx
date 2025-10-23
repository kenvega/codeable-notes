import { getPokemon } from "../../services/pokeapi-service";
import Input from "../Input";
import { useState } from "react";
import PokemonData from "../PokemonData";

export type PokemonDataProps = {
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

type StateProps = {
  status: "idle" | "success" | "error" | "pending";
  data: PokemonDataProps | null;
  error: string | null;
};

export type FavoriteProps = {
  id?: number;
  pokemon_name: string;
  pokemon_id: number;
  pokemon_type: string;
  pokemon_avatar_url: string;
};

const SearchPage = ({
  favorites,
  onAddFavorite,
  onRemoveFavorite,
}: {
  favorites: FavoriteProps[];
  onAddFavorite: (favorite: PokemonDataProps) => void;
  onRemoveFavorite: (favorite: PokemonDataProps) => void;
}) => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<StateProps>({
    status: "idle",
    data: null,
    error: null,
  });

  // variables derivadas (status, data, error)
  const { status, data: pokemon, error } = state;

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
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
        />
      )}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SearchPage;
