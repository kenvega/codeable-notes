import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function login(credentials: { email: string; password: string }) {
  return apiFetch("/login", { body: credentials }).then((userData) => {
    // se consigue el token y el resto se considera datos del usuario
    const { token, ...user } = userData;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}

export function logout() {
  return apiFetch("/logout", { method: "DELETE" });
}
