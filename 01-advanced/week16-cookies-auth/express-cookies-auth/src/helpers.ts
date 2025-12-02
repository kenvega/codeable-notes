import { query } from "./index.ts";

async function getUserByEmail(email: string) {
  return (await query("SELECT * FROM users WHERE email = $1", [email])).rows[0];
}

async function getUser(id: number) {
  return (await query("SELECT * FROM users WHERE id = $1", [id])).rows[0];
}

async function createUser(email: string, hashedPassword: string) {
  return (
    await query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword]
    )
  ).rows[0];
}

export { getUserByEmail, getUser, createUser };
