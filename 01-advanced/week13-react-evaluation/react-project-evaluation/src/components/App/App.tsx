import clsx from "clsx";
import styles from "./App.module.css";

import reactIconUrl from "../../assets/react-icon-lg.svg";

import { useNavigate, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Color Game",
    to: "/color-game",
  },
  {
    name: "Doable",
    to: "/doable",
  },
];

function App() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <button
          className={styles.logo}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={reactIconUrl} /> React Evaluation
        </button>

        <nav className={styles.nav}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx(styles["nav-item"], isActive && styles.current)
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
