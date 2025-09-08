type User = {
  id: number;
  name: string;
  email: string;
};

// Usando `keyof` con el tipo `User`
type UserKeys = keyof User;
// UserKeys es ahora 'id' | 'name' | 'email'

// type UserKeys = keyof { // nota el keyof que es la diferencia
//     id: number;
//     name: string;
//     email: string;
// }
let key: UserKeys;
key = "id"; // OK
key = "name"; // OK
key = "email"; // OK

key = "other";
// ^ Type '"other"' is not assignable to type 'keyof User'

key = 4
// no se trata de los posibles tipos de valores sino del nombre de los keys
