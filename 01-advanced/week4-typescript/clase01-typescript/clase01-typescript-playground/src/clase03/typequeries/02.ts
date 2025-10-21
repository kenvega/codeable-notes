// typeof que existe en javascript por defecto
let myVar = "Hello, world!";
console.log(typeof myVar); // "string"


// typeof en typescript
// el tipo de 'user' es inferido por TypeScript
const user = {
  id: 1,
  name: "Testino",
  email: "testino@mail.com",
};
 
// Usando `typeof` para capturar el tipo de `user`
type UserType = typeof user;
//     ^ type UserType = { id: number; name: string; email: string; }


const aux = { a: 'b' }
type Something = typeof aux