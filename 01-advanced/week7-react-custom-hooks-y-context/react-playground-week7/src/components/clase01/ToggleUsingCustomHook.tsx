import useToggle from "../../hooks/useToggle";

const ToggleUsingCustomHook = () => {
  // puedes cambiar el nombre al usar el valor de retorno
  // no necesariamente tienes que llamarlo como esta en su definicion como 'toggle'
  // puedes llamarlo 'toggleActive' para que el codigo se entienda mas
  const [active, toggleActive] = useToggle(true);

  return (
    <button onClick={toggleActive}>
      {active ? "Toggle ON" : "Toggle OFF"}
    </button>
  );
};

export default ToggleUsingCustomHook;
