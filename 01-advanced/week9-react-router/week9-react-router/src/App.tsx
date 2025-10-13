import { useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    // al montar el componente en la pagina
    document.body.style.backgroundColor = "#97dfe3ff";

    // al desmontar el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>A Simple Critics Page</h1>
      <p>Honest reviews about Games and Companies</p>

      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/*">Invalid Page</Link>
          </li>
          <li>
            <Link to="/asdfasdf">Another Invalid Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
