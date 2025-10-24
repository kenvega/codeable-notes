import apiFetch from "./api-fetch";

export function createFavorite(data: {
  pokemon_name: string;
  pokemon_id: number;
  pokemon_type: string;
  pokemon_avatar_url: string;
}) {
  return apiFetch("/favorites", { body: data });
}

export function removeFavorite(id: number) {
  return apiFetch(`/favorites/${id}`, { method: "DELETE" });
}

export function getFavorites() {
  return apiFetch("/favorites");
}
