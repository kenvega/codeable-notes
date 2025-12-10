import express from "express";
import bcrypt from "bcrypt";
import session from "express-session";
import connect from "connect-pg-simple";
import "dotenv/config";
import meRouter from "./me-router.ts";
import postRouter from "./posts-router.ts";
import {
  getUserByEmail,
  getUserByUsername,
  createUser,
} from "./user-queries.ts";
import { getPaginatedPosts, getUserPosts } from "./post-queries.ts";

import { Pool } from "pg";

// para extender el tipo de session y agregar userId
declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

const pgSession = connect(session);

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: process.env["DB_NAME"] || "express_pg_evaluation_kenvega_db",
  user: process.env["DB_USER"] || "postgres",
  password: process.env["DB_PASSWORD"] || "postgres",
});

export const query = (text: string, params?: (string | number | boolean)[]) => {
  return pool.query(text, params);
};

const app = express();
const port = 5500;

app.use(express.json()); // transforma req.body a JSON

app.use(
  session({
    store: new pgSession({ pool }),
    secret: process.env["SESSION_SECRET"] || "session-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true },
  })
);

app.use("/me", meRouter);
app.use("/posts", postRouter);

// ===========================
// POST /signup - crear cuenta
// ===========================
app.post("/signup", async (req, res) => {
  const { username, email, password, firstName, lastName, role } = req.body;

  if (!username || !password) {
    res.status(400).send("Los campos 'username' y 'password' son requeridos");
    return;
  }

  let userFound = await getUserByUsername(username);

  if (userFound) {
    res
      .status(400)
      .send(`Ya existe un usuario registrado con el username ${username}`);
    return;
  }

  userFound = await getUserByEmail(email);

  if (userFound) {
    res
      .status(400)
      .send(`Ya existe un usuario registrado con el email ${email}`);
    return;
  }

  const costFactor = 10;
  const hashedPassword = await bcrypt.hash(password, costFactor);

  const newUser = await createUser(
    email,
    username,
    hashedPassword,
    firstName,
    lastName,
    role
  );

  res.status(201).json({
    ok: true,
    data: newUser,
  });
});

// ============================
// POST /login - iniciar sesión
// ============================
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await getUserByUsername(username);

  if (!user) {
    res.status(401).send("Credenciales incorrectas");
    return;
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    res.status(401).send("Credenciales incorrectas");
    return;
  }

  // Guardamos el id del usuario en la sesión
  // cookie de sesión es manejada por 'express-session' y es guardada en 'req.session' automáticamente
  req.session.userId = user.id;
  res.status(200).send({ ok: true, data: "Login exitoso" });
});

// ============================
// POST /logout - cerrar sesión
// ============================
app.post("/logout", (req, res) => {
  // borramos la sesión del lado del servidor
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error al cerrar sesión");
      return;
    }
    // opcionalmente borramos la sesión del lado del cliente también
    res.clearCookie("connect.sid");
    res.send("Logout exitoso");
  });
});

// ===============================================
// GET /posts - ver todos los posts con paginacion
// ===============================================
app.get("/", async (req, res) => {
  const { page = 1, limit = 2 } = req.query;

  const paginatedPosts = await getPaginatedPosts(Number(page), Number(limit));

  res.status(200).json({ ok: true, data: paginatedPosts });
});

// ================================================
// GET /:username - ver posts de usuario especifico
// ================================================
app.get("/:username", async (req, res) => {
  // retornar posts del usuario logueado
  const { username } = req.params;

  const user = await getUserByUsername(username);

  if (!user) {
    res.status(404).send(`Usuario con username ${username} no encontrado`);
    return;
  }

  const posts = await getUserPosts(user.id);

  res.status(200).json({ ok: true, data: posts });
});

// middleware de manejo de errores
app.use(
  (err: any, _req: express.Request, res: express.Response, _next: any) => {
    console.error(err.stack);
    res.status(500).send("Algo salió mal en el servidor");
  }
);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
