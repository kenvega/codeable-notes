interface Runner {
  numOfLegs: number;
}

interface Runner {
  walk(): void;
}

interface Runner {
  run(): void;
}

// usado como anotación de tipo
const chetah: Runner = { numOfLegs: 4, walk() {}, run() {} }; // OK

// usado para implementar una clase
class Animal implements Runner {
  numOfLegs = 4;

  walk() {}
  run() {}
}

const lion = new Animal(); // OK

// las interfaces son abiertas
// pueden ser declaradas todas las veces que sean necesarias
// se iran agregando