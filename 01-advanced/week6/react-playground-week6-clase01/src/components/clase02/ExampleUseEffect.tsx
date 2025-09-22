import { useEffect } from 'react'

const ExampleUseEffect = () => {
  useEffect(() => {
    document.title = "Titulo Nuevo"; // manipulación del DOM
    window.addEventListener("keydown", (e) => console.log(e.key)); // agregar escuchador de eventos global

    fetch("https://jsonplaceholder.typicode.com/todos/1") // Network Call
      .then((response) => response.json())
      .then((json) => console.log(json));

    window.localStorage.setItem("efecto", "secundario"); // Escribir en localStorage;
  });

  return <h1>Ejemplo de useEffect</h1>;
}

export default ExampleUseEffect