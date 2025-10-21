// los '<' y '>' se usan exclusivamente para genericos

function getOne<T>(arr: T[]): T | undefined {
  return arr[0];
}

// se usa en declaracion de funciones o en declaracion de clases



function echo<T>(val: T): T {
  return val
}

// lo pasa explicitamente
echo<string>('Hello, world')


class Person<T> {
  name: T;

  constructor(name: T) {
    this.name = name
  }
}

const john = new Person<string>('John Doe')


// * los genericos se pueden colocar en objetos y metodos
//     pero no se profundizara en eso

// se pueden hacer cosas mas complejas dentro de los '<' y '>'
//  mas complejas que solo poner un "<string> por ejemplo"
