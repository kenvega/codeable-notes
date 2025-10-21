// import FocusProblem from "./FocusProblem";
import FocusSolution from "./FocusSolution";

const ExampleUseRef = () => {
  return (
    <>
      {/* harian focus al primer mismo id. se podria solucionar con useId */}
      {/* <FocusProblem />
      <FocusProblem /> */}
      {/* es recomendable mejor usar useRef para evitar manipular el DOM directamente */}
      {/* nota que ya */}
      <FocusSolution />
      <FocusSolution />
    </>
  );
};

export default ExampleUseRef;
