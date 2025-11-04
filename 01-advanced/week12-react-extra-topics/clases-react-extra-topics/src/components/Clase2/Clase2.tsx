import React from "react";
import Summary from "../components_clase2/Summary";
// import Comments from "../components_clase2/Comments"; // usar este metodo para notar que Comments y Stories tardarían en cargar
// import Stories from "../components_clase2/Stories";
const Comments = React.lazy(() => import("../components_clase2/Comments")); // usar este metodo para reducir el tiempo de carga inicial
const Stories = React.lazy(() => import("../components_clase2/Stories")); // efectos mas notables activando fast/low 4g y disabling cache en dev tools
import styles from "./Clase2.module.css";

const Clase2 = () => {
  const [page, setPage] = React.useState("summary");

  return (
    <div>
      <h1>Clase 2: React.lazy y React.Suspense</h1>

      {/* si vas a network tab en dev tools veras que Summary pesa 4.7kB, Comments pesa 310kB y Stories pesa 525kB */}
      {/* si pones la velocidad a slow 4g y miras el overview de los network requests veras que Comments y Stories toman tiempo approx 7 segundos */}
      {/* entonces Comments y Stories podrian cargarse con React.lazy para mejorar el tiempo de carga inicial de la pagina */}
      {/* nota: otro que tambien tarda es react-dom_client pero ese no se puede cargar de manera diferida. es necesario */}
      <div className={styles.wrapper}>
        <aside>
          <ul>
            <li>
              <button onClick={() => setPage("summary")}>Summary</button>
            </li>
            <li>
              <button onClick={() => setPage("comments")}>Comments</button>
            </li>
            <li>
              <button onClick={() => setPage("stories")}>Stories</button>
            </li>
          </ul>
        </aside>
        <main>
          <React.Suspense fallback={<p>Fallback loading for {page}</p>}>
            {page === "summary" && <Summary />}
            {page === "comments" && <Comments />}
            {page === "stories" && <Stories />}
          </React.Suspense>
        </main>
      </div>
    </div>
  );
};

export default Clase2;
