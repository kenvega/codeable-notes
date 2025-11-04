import ComponentA from "../components_clase1/ComponentA";
import ComponentB from "../components_clase1/ComponentB";
import { ErrorBoundary } from "react-error-boundary";
import Peligro from "../components_clase1/Peligro";
import Danger from "../components_clase1/Danger";
import ErrorComponent from "../components_clase1/ErrorComponent";
import ErrorComponentForDanger from "../components_clase1/ErrorComponentForDanger";
import styles from "./Clase1.module.css";

const Clase1 = () => {
  return (
    <div>
      <div>
        <h1>Clase 1: Error Boundary</h1>

        <h2>Error Boundary only fallback</h2>
        <ComponentA />
        <ErrorBoundary
          fallback={<p className="error">Lo siento, algo falló...</p>}
        >
          <Peligro />
        </ErrorBoundary>
        <ComponentB />

        <h2>Error Boundary with fallback component</h2>
        <ComponentA />
        <ErrorBoundary
          FallbackComponent={ErrorComponent}
          onReset={(details) => console.log("details: ", details)} // details es lo que le pases al resetErrorBoundary en el ErrorComponent
          onError={(error, info) => {
            console.log("error: ", error);
            console.log("info: ", info);
          }}
        >
          <Peligro />
        </ErrorBoundary>
        <ComponentB />

        <h2>Ejercicio</h2>

        <div className={styles.wrapper}>
          <header>Header</header>
          <main>Main</main>
          <aside>
            <p>Aside</p>
            <ErrorBoundary FallbackComponent={ErrorComponentForDanger}>
              <Danger />
            </ErrorBoundary>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Clase1;
