import { query } from "./index.ts";

export const getUserByEmail = async (email: string) => {
  return (await query("SELECT * FROM users WHERE email = $1", [email])).rows[0];
};

export const getUserByUsername = async (username: string) => {
  return (await query("SELECT * FROM users WHERE username = $1", [username]))
    .rows[0];
};

export const getUserByEmailOrUsername = async (
  username: string,
  email: string
) => {
  return (
    await query("SELECT * FROM users WHERE username = $1 OR email = $2", [
      username,
      email,
    ])
  ).rows[0];
};

export const getUserById = async (id: number) => {
  return (await query("SELECT * FROM users WHERE id = $1", [id])).rows[0];
};

export const updateUser = async (
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string
) => {
  return (
    await query(
      "UPDATE users SET username = $1, email = $2, first_name = $3, last_name = $4 WHERE id = $5 RETURNING *",
      [username, email, firstName, lastName, id]
    )
  ).rows[0];
};

export const deleteUser = async (id: number) => {
  return (await query("DELETE FROM users WHERE id = $1", [id])).rowCount;
};

export const createUser = async (
  email: string,
  username: string,
  hashedPassword: string,
  firstName: string,
  lastName: string,
  role: string = "user"
) => {
  return (
    await query(
      "INSERT INTO users (email, username, password, first_name, last_name, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [email, username, hashedPassword, firstName, lastName, role]
    )
  ).rows[0];
};
