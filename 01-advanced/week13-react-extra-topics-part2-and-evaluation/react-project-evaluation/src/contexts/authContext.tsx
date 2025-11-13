import * as React from "react";
import { baseUrl, tokenKey } from "../constants";

interface SignupCredentials {
  email: string;
  password: string;
}

interface SignupResponse {
  token: string;
}

interface ErrorResponse {
  errors: string | string[];
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<{
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: async () => {
    return Promise.resolve();
  },
  signup: async () => {
    return Promise.resolve();
  },
  logout: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const savedToken = window.localStorage.getItem(tokenKey);

    if (savedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  interface LoginCredentials {
    email: string;
    password: string;
  }

  async function login(email: string, password: string): Promise<void> {
    const options: RequestInit = {
      method: "POST",
      body: JSON.stringify({ email, password } as LoginCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(baseUrl + "/login", options);

    if (response.ok) {
      const { token }: { token: string } = await response.json();
      window.localStorage.setItem(tokenKey, token);
      setIsAuthenticated(true);
    } else {
      const body: { errors: string | string[] } = await response.json();
      const error =
        body.errors instanceof Array ? body.errors.join(", ") : body.errors;
      return Promise.reject(new Error(error));
    }
  }

  async function signup(email: string, password: string): Promise<void> {
    const options: RequestInit = {
      method: "POST",
      body: JSON.stringify({ email, password } as SignupCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(baseUrl + "/signup", options);

    if (response.ok) {
      const { token }: SignupResponse = await response.json();
      window.localStorage.setItem(tokenKey, token);
      setIsAuthenticated(true);
      return;
    } else {
      const body: ErrorResponse = await response.json();
      const error =
        body.errors instanceof Array ? body.errors.join(", ") : body.errors;
      return Promise.reject(new Error(error));
    }
  }

  function logout() {
    window.localStorage.removeItem(tokenKey);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}
