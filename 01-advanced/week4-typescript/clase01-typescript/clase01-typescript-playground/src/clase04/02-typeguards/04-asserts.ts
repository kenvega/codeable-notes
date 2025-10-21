// asserts value is Type
// typar pero el valor de retorno de la funcion
// ya no se espera que devuelva un booleano
// solo pasa que si la funcion no levanta un error
// entonces se asume que la variable es correcto

interface Student {
  name: string;
  age: number;
}

let testino: any;

function assertsIsStudent(value: any): asserts value is Student {
  if (
    !(
      value &&
      typeof value === "object" &&
      "name" in value &&
      typeof value["name"] === "string" &&
      "age" in value &&
      typeof value["age"] === "number"
    )
  ) {
    throw new Error(`Value is not type-equivalent to Student`);
  }
}

assertsIsStudent(testino);
testino;
//  ^ let testino: Student

// luego de la ejecucion del assert, testino pasa de any a Student

