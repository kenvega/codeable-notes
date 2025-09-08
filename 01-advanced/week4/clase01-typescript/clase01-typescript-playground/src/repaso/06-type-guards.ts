// una validacion que le dice a typescript
//   cual es el tipo de una variable despues de esa validacion

type Perro = { ladra: () => void };
type Gato = { maulla: () => void };
function esPerro(animal: Perro | Gato): animal is Perro {
 // validamos con algo real en tiempo de ejecución
 return (animal as Perro).ladra !== undefined;
}

function hacerSonido(animal: Perro | Gato) {
  // tambien funciona con "'ladra' in animal"
  if (esPerro(animal)) {
    animal.ladra(); // aquí TS ya sabe que es un Perro
  } else {
    animal.maulla(); // aquí TS ya sabe que es un Gato
  }
}

