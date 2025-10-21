
// aliases
type User = { name: string; email: string };

// Tuplas
type UserSuccess = readonly ["success", User]; // tupla siempre primer valor "success"
type UserError = readonly ["error", Error]; // la interface Error no se tiene que declarar

// Union
type UserResponse = UserSuccess | UserError;

function getUser(): UserResponse {
  if (Math.random() > 0.5) {
    return ["success", { name: "Testino", email: "testino@mail.com" }];
  } else {
    return ["error", new Error("Something went wrong!")];
  }
}

const [result, data] = getUser();