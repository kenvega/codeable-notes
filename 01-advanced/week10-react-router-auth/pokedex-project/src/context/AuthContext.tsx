import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
// import { login, logout } from "../services/auth-service";
import { createUser, getUser } from "../services/user-service";
import { tokenKey } from "../config";
import * as auth from "../services/auth-service";

type AuthContextProps = {
  user: null | {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
  };
  login: (credentials: { email: string; password: string }) => void;
  logout: () => void;
  signUp: (userData: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => void;
};

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: (_credentials) => {},
  logout: () => {},
  signUp: (_userData) => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((userData) => setUser(userData))
      .catch((error) => console.log(error));
  }, []);

  function login(credentials: { email: string; password: string }) {
    auth
      .login(credentials)
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }

  function logout() {
    auth.logout().then(() => {
      sessionStorage.removeItem(tokenKey);
      setUser(null);
    });
  }

  function signUp(userData: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) {
    createUser(userData)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook para usar el auht context donde necesitemos
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
