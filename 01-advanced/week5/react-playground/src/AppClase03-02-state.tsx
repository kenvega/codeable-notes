import React from "react";

// las variables regulares en el componente de React veo que
//    a pesar de que cambien de valor no generan un cambio en la pagina
// queria ver que luego de cada re-render
//    el valor de 'test' volvia a su valor original
//    pero nunca cambia en la pagina al parecer

// los setters son los triggers que le dicen a react que debe cambiar lo que se esta mostrando
//    por ejemplo llamar al setCount es lo unico que haria que se pueda llamar de nuevo al re-render

export default function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  let test = 'hello'

  setTimeout(() => {
    console.log("timeout funciona! pero no se reflejan cambios de 'test' en la pagina")
    test += ' world'
    setCount(1000)
    console.log('test: ', test);
  }, 2000)

  return (
    <div>
      <p>count: {count}</p>
      <p>test: {test}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
