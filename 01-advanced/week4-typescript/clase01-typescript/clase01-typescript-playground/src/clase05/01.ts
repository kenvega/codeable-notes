// como no se puede inferir el tipo de valor se pone 'any' por defecto
function echo(value) {
//             ^ Parameter 'value' implicitly has an 'any' type
  return value;
}

// entonces todas estas variables tambien serian de valor tipo any
let val1 = echo(1);
let val2 = echo("Codeable");
let val3 = echo(true);
let val4 = echo([1, 2, 3]);




// pero si se quiere que
// el valor tenga el mismo tipo que el parametro que le pasamos a la funcion
// se usa genericos
// esa 'T' en realidad puede ser lo que sea con tal de que se repita
// por estandar se escribe 'T' por TypeParam (tipo a partir del parametro)
function echo2<T>(value: T) {
  return value;
}

let val5 = echo2(1);
//    ^ let val1: number
let val6 = echo2("Codeable");
//    ^ let val1: string
let val7 = echo2(true);
//    ^ let val1: boolean
let val8 = echo2([1, 2, 3]);
//    ^ let val1: number[]



// recuerda: las declaraciones de tipos pueden recibir argumentos

// se le puede pasar un argumento para decir que es lo que se enviara
// * esta sintaxis solo se puede usar cuando 
let val9 = echo2<string>(4);


let val3 = echo<string>(4);

// typescript no puede validar si un array podria ser vacio
// porque uno solo sabria si es que ese array de parametro tendria
//   elementos en el runtime


// con esto ya se puede tambien inferir el tipo de dato de un elemento de un array
function getFirstElement<T>(array: T[]) {
  return array[0];
}

const num = getFirstElement([1, 2, 3]);
//     ^ const num: number

const str = getFirstElement(["hello", "world"]);
//     ^ const str: string



// pregunta:
// que pasa si tengo mas de un parametro con diferente tipo?

