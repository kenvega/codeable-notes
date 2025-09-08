// cuando se habla de clases en typescript
// las clases pueden servir como interfaces
// este ejemplo podria ser bien solamente javascript puro. ver 7:57pm
class Animal {
  hasDNA = true;
  sleep() {};
  eat() {};
}

// Decimos que la sub-clase Dog extiende la clase base Animal
class Dog extends Animal {
  bark() {}
}

const fido = new Dog();

fido.hasDNA; // OK, hereda de Animal
fido.sleep(); // OK, hereda de Animal
fido.eat(); // OK, hereda de Animal
fido.bark(); // OK

// pregunta:
// 'extends' no existe dentro de javascript sin typescript cuando se habla de clases?
//    segun las notas de codeable sí existe en js. y se usa para herencia en clases






// De manera muy similar, una interfaz puede extender otra interfaz
//   tomando su tipo como base y extendiéndolo:

interface Machine {
  serialNumber: string;
  productionDate: Date;
}

interface Laptop extends Machine {
  size: number;
  os: string;
}

const macBook: Laptop = { size: 16, os: "macOS" };
//     ^ Type '{ size: number; os: string; }' is missing
//         the following properties from type 'Laptop': serialNumber, productionDate

const pc: Laptop = {
  size: 16,
  os: "macOS",
  serialNumber: "abc123",
  productionDate: new Date("2023-12-01"),
}; // OK
