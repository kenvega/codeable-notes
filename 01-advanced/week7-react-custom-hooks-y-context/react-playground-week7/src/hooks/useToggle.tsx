import React from "react";

function useToggle(intialValue = false) {
  const [active, setActive] = React.useState(intialValue);

  function toggle() {
    setActive(!active);
  }

  // sin el 'as const' typescript infiere en base a lo que se devuelve en una funcion
  // ve, es un arreglo de booleano o de funciones
  // function useToggle(): (boolean | (() => void))[]
  //
  // pero con 'as const' se le indica que esa es la forma que va a tener especificamente el array
  // function useToggle(): readonly [boolean, () => void]
  return [active, toggle] as const;
}

export default useToggle;

// typescript no puede inferir que un array
// sea inmutable
// o tener un numero limitado de elementos
// a menos que tu le especifiques eso
// por eso el 'as const' es necesario en este caso
// revisa la clase donde se vio tuplas
