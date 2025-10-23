import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { FaWeightScale } from "react-icons/fa6";
import { colors, typography } from "../styles";
import type { PokemonDataProps } from "./pages/SearchPage";

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

const PokemonData = ({
  dataPokemon,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}: {
  dataPokemon: PokemonDataProps;
  onAddFavorite: (favorite: PokemonDataProps) => void;
  onRemoveFavorite: (favorite: PokemonDataProps) => void;
  isFavorite: boolean;
}) => {
  const regularContent = (
    <>
      <RiStarFill color={colors.gray.light} /> Mark as favorite
    </>
  );

  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} /> Remove Favorite
    </>
  );

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
      <FavoriteButton
        onClick={() =>
          isFavorite
            ? onRemoveFavorite(dataPokemon)
            : onAddFavorite(dataPokemon)
        }
      >
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
    </div>
  );
};

export default PokemonData;
