function FocusProblem() {
  const handleClick = () => {
    // como querySelector devuelve un Element
    // se tiene que usar el generico de un input
    // para que en vez de devolver Element use el mas especifico HTMLInputElement
    // con eso ya tendria acceso al metodo focus
    const input = document.querySelector<HTMLInputElement>("#input")
    if (input) {
      input.focus()
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Focus input</button>
      <input id="input"/>
    </div>
  );
}

export default FocusProblem;
