import { getPokemon } from "../../services/pokeapi-service";
import Input from "../Input";
import { useState } from "react";
import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { FaWeightScale } from "react-icons/fa6";
import { colors, typography } from "../../styles";

type pokemonDataProps = {
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

function formatId(idNumber: number) {
  const id = String(idNumber);
  return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;
}

const PokeImage = styled.img`
  max-width: 144px;
`;

const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${colors.gray.medium};
  border: none;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  font-family: ${typography.text};
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

type StateProps = {
  status: "idle" | "success" | "error" | "pending";
  data: pokemonDataProps["dataPokemon"] | null;
  error: string | null;
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

  function PokemonData({ dataPokemon }: pokemonDataProps) {
    return (
      <div>
        <h2>{dataPokemon.name}</h2>
        <p>{formatId(dataPokemon.id)}</p>
        <PokeImage
          src={dataPokemon.sprites.other["official-artwork"].front_default}
          alt={dataPokemon.name}
        />
        {dataPokemon.types.map((element) => (
          <p key={element.slot}>{element.type.name}</p>
        ))}
        <p>
          <LiaRulerVerticalSolid /> Height: {dataPokemon.height / 10} m
        </p>
        <p>
          <FaWeightScale /> Weight: {dataPokemon.weight / 10} kg
        </p>
        <FavoriteButton>
          <RiStarFill color={colors.gray.light} />
          Mark as favorite
        </FavoriteButton>
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (query.length === 0) {
      return;
    }
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
      {status === "success" && pokemon && <PokemonData dataPokemon={pokemon} />}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SearchPage;
