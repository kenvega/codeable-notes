import express from "express";
// import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import session from "express-session";
import connect from "connect-pg-simple";
import { Pool } from "pg";
import { getUserByEmail, createUser, getUser } from "./helpers.ts";

const pgSession = connect(session);

// exportamos el pool porque 'connect-pg-simple' lo necesitará
export const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "cookie-auth",
  user: "postgres",
  password: "postgres",
});

export const query = (text: string, params?: (string | number | boolean)[]) => {
  return pool.query(text, params);
};

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

const app = express();
const port = 5500;

// app.use(cookieParser()); // Poblar req.cookies con objetos de cookies
app.use(express.json()); // Transformar req.body a JSON

app.use(
  session({
    store: new pgSession({ pool }),
    secret: "session-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true },
  })
);

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (user) {
    res.status(400).send("El correo ya está registrado");
    return;
  }

  const costFactor = 10;
  const hashedPassword = await bcrypt.hash(password, costFactor);

  const newUser = await createUser(email, hashedPassword);
  res.status(201).json(newUser);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    res.status(401).send("Credenciales incorrectas");
    return;
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (isValid) {
    // Guardamos el id del usuario en la sesión
    // cookie de sesión es manejada por 'express-session' y es guardada en 'req.session' automáticamente
    req.session.userId = user.id;
    res.send("Login exitoso");
  } else {
    res.status(401).send("Credenciales incorrectas");
  }
});

app.get("/user", async (req, res) => {
  // leemos el id del usuario desde la sesión directamente ya no desde la cookie
  // esto debido a que 'express-session' maneja la cookie de sesión automáticamente
  const userId = req.session.userId;

  if (!userId) {
    res.status(403).send("Acceso denegado");
    return;
  }

  const user = await getUser(Number(userId));

  if (user) {
    res.json(user);
  } else {
    res.status(403).send("Acceso denegado");
  }
});

app.post("/logout", (req, res) => {
  // borramos la sesión del lado del servidor
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error al cerrar sesión");
      return;
    }
    // Opcionalmente, borramos la sesión del lado del cliente también
    res.clearCookie("connect.sid");
    res.send("Logout exitoso");
  });
});

app.listen(port, () => console.log(`Escuchando al puerto ${port}`));
