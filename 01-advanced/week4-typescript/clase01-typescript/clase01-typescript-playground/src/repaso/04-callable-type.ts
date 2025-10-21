// se parece mucho a un arrow funcion
// pero simplemente si dice 'type' al lado izquierdo de todo
//  entonces con eso ya te das cuenta que no es un arrow function sino un calable type

type Suma = (a:number, b:number) => number;

const sumar: Suma = (x, y) => x + y;

console.log(sumar(2,3))

// uno podria hacer esto
const sumar2 : (a:number, b:number) => number = (x, y) => x + y;
