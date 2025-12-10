import express from "express";
import {
  getUserById,
  updateUser,
  deleteUser,
  getUserByUsername,
  getUserByEmail,
} from "./user-queries.ts";

const router = express.Router();

// ===============================
// GET /me - ver perfil de usuario
// ===============================
router.get("/", async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    res.status(401).send("Acceso denegado. Usuario no autenticado");
    return;
  }

  const user = await getUserById(Number(userId));

  if (!user) {
    res.status(404).send("Usuario no existe");
    return;
  }

  // eliminar campos 'password' y 'role' antes de enviar la respuesta
  delete user.password;
  delete user.role;

  res.status(200).json({ ok: true, data: user });
});

// ====================================
// PATCH /me - editar cuenta de usuario
// ====================================
router.patch("/", async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    res.status(401).send("Acceso denegado. Usuario no autenticado");
    return;
  }

  const {
    username,
    email,
    first_name: firstName,
    last_name: lastName,
  } = req.body;

  // si el username esta vacio devolver error
  if (!username) {
    res
      .status(400)
      .send("El campo 'username' es requerido para la actualización");
    return;
  }

  // si el username o email nuevo ya existe devolver error
  let existingUser = await getUserByUsername(username);

  if (existingUser && existingUser.id !== userId) {
    res.status(400).send(`El username ${username} ya está en uso`);
    return;
  }

  existingUser = await getUserByEmail(email);

  if (existingUser && existingUser.id !== userId) {
    res.status(400).send(`El nuevo email ${email} ya está en uso`);
    return;
  }

  const updatedUser = await updateUser(
    Number(userId),
    username,
    email,
    firstName,
    lastName
  );

  // eliminar campos 'password' y 'role' antes de enviar la respuesta
  delete updatedUser.password;
  delete updatedUser.role;

  res.status(200).json({ ok: true, data: updatedUser });
});

// =======================================
// DELETE /me - eliminar cuenta de usuario
// =======================================
router.delete("/", async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    res.status(401).send("Acceso denegado. Usuario no autenticado");
    return;
  }

  // eliminar al usuario de la base de datos
  await deleteUser(Number(userId));

  // destruir la sesión
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.status(200).json({ ok: true });
  });
});

export default router;
