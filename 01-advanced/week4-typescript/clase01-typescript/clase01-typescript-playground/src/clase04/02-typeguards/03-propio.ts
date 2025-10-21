interface Student {
  name: string;
  age: number;
}

let testino: any;

// La función de comprobación (el Type Guard)
function isStudent(value: any): boolean {
  return (
    value &&
    typeof value == "object" &&
    "name" in value &&
    typeof value ["name"] == "string" &&
    "age" in value &&
    typeof value["age"] == "number"
  )
}

if (isStudent(testino)) {
  // si llegamos aqui sabemos que 'testino' cumple con Student
  testino;
  // ^ let value: any

  // a pesar de que cumple con Student sigue tratado como any
}

// se debe usar 'value is Type'

function isStudent2(value: any): value is Student {
  return (
    value &&
    typeof value == "object" &&
    "name" in value &&
    typeof value ["name"] == "string" &&
    "age" in value &&
    typeof value["age"] == "number"
  )
}

if (isStudent2(testino)) {
  // si llegamos aqui sabemos que 'testino' cumple con Student
  testino;
  // ^ let value: any

  // ahora sí con el type guard se demuestra que es 
}

