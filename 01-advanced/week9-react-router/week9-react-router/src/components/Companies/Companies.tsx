import { useEffect } from "react";
import { Link } from "react-router-dom";

function Companies() {
  useEffect(() => {
    // al montar el componente en la pagina
    document.body.style.backgroundColor = "#a9c26aff";

    // al desmontar el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <p>Shows a list of fetched companies.</p>

      <Link to="/">Home</Link>
    </div>
  );
}

export default Companies;
