import express from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import session from "express-session";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

const app = express();
const port = 5500;

app.use(cookieParser()); // Poblar req.cookies con objetos de cookies
app.use(express.json()); // Transformar req.body a JSON

app.use(
  session({
    secret: "session-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true },
  })
);

// Arreglo de usuarios en memoria:
// El id será un string ya que usaremos 'crypto.randomUUID()' para generarlo
const users: { id: string; email: string; password: string }[] = [];

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (user) {
    res.status(400).send("El correo ya está registrado");
    return;
  }

  const costFactor = 10; // Cost factor
  const hashedPassword = await bcrypt.hash(password, costFactor);

  const newUser = {
    id: crypto.randomUUID(),
    email: req.body.email,
    password: hashedPassword,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

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

app.get("/user", (req, res) => {
  // leemos el id del usuario desde la sesión directamente ya no desde la cookie
  // esto debido a que 'express-session' maneja la cookie de sesión automáticamente
  const userId = req.session.userId;

  const user = users.find((u) => u.id === userId);

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
