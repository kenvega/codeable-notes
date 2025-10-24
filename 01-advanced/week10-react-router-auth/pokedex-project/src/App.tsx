import { useState, useEffect } from "react";
import { createUser, getUser } from "./services/user-service";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import { login, logout } from "./services/auth-service";
import { tokenKey } from "./config";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((userData) => setUser(userData))
      .catch((error) => console.log(error));
  }, []);

  function handleLogin(credentials: { email: string; password: string }) {
    login(credentials)
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }

  function handleLogout() {
    logout().then(() => {
      sessionStorage.removeItem(tokenKey);
      setUser(null);
    });
  }

  function handleSignUp(userData: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) {
    createUser(userData)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }

  return user ? (
    <AuthenticatedApp onLogout={handleLogout} />
  ) : (
    <UnauthenticatedApp onLogin={handleLogin} onSignUp={handleSignUp} />
  );
}

export default App;
