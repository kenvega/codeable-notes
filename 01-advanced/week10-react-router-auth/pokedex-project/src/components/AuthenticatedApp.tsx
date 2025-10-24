import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import { useState, useEffect } from "react";
import type { FavoriteProps, PokemonDataProps } from "./pages/SearchPage";
import {
  createFavorite,
  getFavorites,
  removeFavorite,
} from "../services/favorites-service";

const AuthenticatedApp = () => {
  const [favorites, setFavorites] = useState<FavoriteProps[]>([]);

  useEffect(() => {
    getFavorites().then((data) => setFavorites(data));
  }, []); //?? favorites

  function handleAddFavorite(pokemon: PokemonDataProps) {
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

  function handleRemoveFavorite(pokemon: PokemonDataProps) {
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

  return (
    <SearchPage
      favorites={favorites}
      onAddFavorite={handleAddFavorite}
      onRemoveFavorite={handleRemoveFavorite}
    />
  );
  return <FavoritesPage favorites={favorites} />;
};

export default AuthenticatedApp;
