import React from "react";

const SimpleUseRef = () => {
  const divRef = React.useRef();

  console.log(divRef); // { current: undefined } (aún no se renderiza el div)

  // el efecto se ejecuta después del primer render
  React.useEffect(() => {
    console.log(divRef); // { current: <div>Hola mundo</div> }
  })

  return <div ref={divRef}>Hola mundo</div>
}

export default SimpleUseRef