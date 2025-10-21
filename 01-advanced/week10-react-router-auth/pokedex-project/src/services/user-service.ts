import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function createUser(userData: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) {
  return apiFetch("/signup", { body: userData }).then((createdUserData) => {
    const { token, ...user } = createdUserData;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}
