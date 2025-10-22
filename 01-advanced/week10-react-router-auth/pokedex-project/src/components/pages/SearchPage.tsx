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

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

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
    getPokemon(query)
      .then((data) => {
        setPokemon(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Pokemon no existe! Intenta de nuevo", error);
        setError(error.message);
        setPokemon(null);
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
      {!pokemon && !error && "Ready to search"}
      {pokemon && <PokemonData dataPokemon={pokemon} />}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* {pokemon ? <PokemonData dataPokemon={pokemon} /> : "Ready to search"} */}

      {/* {pokemon ? (
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
      )} */}
    </div>
  );
};

export default SearchPage;
