interface User {
  name: string;
  email: string;
}

// usar la interfaz anotar el tipo de una variable
const user: User = { name: "Testino", email: "testino@mail.com" };

// para anotar un parámetro
function printUser(user: User) {
  console.log(user.name); // podemos acceder a sus propiedades
}

printUser(user);