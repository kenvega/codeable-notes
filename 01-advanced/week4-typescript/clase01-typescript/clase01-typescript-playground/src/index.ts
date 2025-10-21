// function combine(a: number, b: number) {
//   return a + b;
// }

// const result = combine(10, 20);
// console.log(result);

function combine(a: number, b: number): number {
//               ^ (parameter) a: number
  return a + b;
}

combine(10, "invalid");
//             ^ Argument of type 'string' is not assignable to parameter of type 'number'.



// Objetos

const book = { title: "Hamlet", author: "Shakespeare" };
//     ^ const book: { title: string; author: string; }

book.title = "The Art of War"; // OK
book.author = true;
//  ^ Type 'boolean' is not assignable to type 'string'.


let student: { name: string; age: number; }

student = { name: "Testino" };
// ^ Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'


let book: {
  title: string;
  author: string;
  web?: string;
};

book = { title: "Hamlet", autor: "Shakespeare" };
//                          ^ ... 'autor' does not exist in type '{ title: string; ... }'



// Arrays

const countries = ["PE", "MX", "CO", "CL"];
//        ^ const countries: string[]

const evenNumbers = [2, 4, 6, 8];
//        ^ const evenNumbers: number[]

const manyThings = [2, 4, 6, 8, 'asdf', true];
//        ^ const manyThings: (string | number | boolean)[]

const tasks = [{ title: "Estudiar" }, { title: "Dormir" }];
//      ^ const tasks: { title: string; }[]

const fruits = [];
//      ^ const fruits: any[]



// Tupla

// como se definen mal
const student2 = ["Testino", 25, true];
//       ^ const student: (string | number | boolean)[]
student2.push('new value') // dejaria de ser una tupla porque dejaria de tener un tamaño fijo

// como se definen bien las tuplas
const student3: [string, number, boolean] = ["Testino", 25, true];

student3[0] = true;
// ^ Type 'boolean' is not assignable to type 'string'
student3[1] = "Testino";
// ^ Type 'string' is not assignable to type 'number'
student3[2] = 25;
// ^ Type 'number' is not assignable to type 'boolean'

student3[0] = "Ricardo";
student3[1] = 25;
student3[2] = false;

student3.push('hello') // esto rompe el concepto de tupla


const student4: readonly [string, number, boolean] = ["Testino", 25, true];

// con eso la tupla ya no te deja reasignar ni agregar
student4.push('hello') // esto rompe el concepto de tupla


// pregunta:
// como podria tener una tupla que me permite cambiar valores pero que no me deja agregar mas elementos
//   no se puede segun el profe

// * readonly solo se puede aplicar a arreglos y tuplas cuando se habla de una variable
const student5: readonly {name: string, age: number, isActive: boolean } = {
  name: 'Testino',
  age: 25,
  isActive: true
}

// pero si se puede agregar a una propiedad
const student6: {readonly name: string, readonly age: number, isActive: boolean } = {
  name: 'Testino',
  age: 25,
  isActive: true
}

