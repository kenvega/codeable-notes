import { useRef } from "react";

function FocusSolution() {
  // por typescript se necesita pasar un parametro para useRef
  // tecnicamente el primer parametro si es opcional de useRef en React
  // pero como han escrito los tipos de react
  // han especificado que ese parametro sea explicito
  // por eso tienes que pasar null
  // esto mismo pasa con otro hook
  const myInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    // recuerda que se guarda un objeto con una propiedad current
    const input = myInputRef.current
    if (input) {
      input.focus()
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Focus input</button>
      <input ref={myInputRef} />
    </div>
  );
}

export default FocusSolution;
