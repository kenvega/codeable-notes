import type { FavoriteProps } from "./SearchPage";
import styled from "@emotion/styled";

type FavoritesPageProps = {
  favorites: FavoriteProps[];
};

type PokemonTypeProp = {
  pokemonType: keyof typeof typeColors;
};

const typeColors = {
  bug: "#A8B820",
  dark: "#705848",
  dragon: "#7038F8",
  electric: "#F8D030",
  fairy: "#EE99AC",
  fighting: "#C03028",
  fire: "#F08030",
  flying: "#A890F0",
  ghost: "#705898",
  grass: "#78C850",
  ground: "#E0C068",
  ice: "#98D8D8",
  normal: "#A8A878",
  poison: "#A040A0",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  water: "#6890F0",
};

const PokeCard = styled("div")`
  border: 2px solid
    ${({ pokemonType }: PokemonTypeProp) => typeColors[pokemonType]};
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Favorites = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FavoritesPage = ({ favorites }: FavoritesPageProps) => {
  return (
    <Wrapper>
      <h3>Favorites</h3>
      <Favorites>
        {favorites.map((favorite) => (
          <PokeCard
            key={favorite.id}
            pokemonType={
              favorite.pokemon_type as PokemonTypeProp["pokemonType"]
            }
          >
            <p>{favorite.pokemon_name}</p>
            <img src={favorite.pokemon_avatar_url} alt="pokemon" />
          </PokeCard>
        ))}
      </Favorites>
    </Wrapper>
  );
};

export default FavoritesPage;
