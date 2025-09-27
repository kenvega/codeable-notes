import * as React from "react";
import Dashboard from "./Dashboard.tsx";
// import "Exercise01.module.css";

const authContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  function login(username, password) {
    if (!username || !password) {
      return;
    }

    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <authContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

function NavBar() {
  const { logout, isAuthenticated } = React.useContext(authContext);

  return (
    <nav>
      <p>Company Logo</p>
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

function LoginForm() {
  const { login } = React.useContext(authContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          required
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

function Main() {
  const { isAuthenticated } = React.useContext(authContext);

  return <main>{isAuthenticated ? <Dashboard /> : <LoginForm />}</main>;
}

export default function Exercise01() {
  return (
    <AuthProvider>
      <NavBar />
      <Main />
    </AuthProvider>
  );
}
