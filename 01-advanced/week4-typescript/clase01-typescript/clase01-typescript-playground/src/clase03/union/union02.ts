function getUser() {
  const success = [
    "success",
    { name: "Testino", email: "testino@mail.com" },
  ] as const; // 'as const' le dice a typescript que el array se trate como uno literal

  const success2: readonly [
    "success",
    { readonly name: "Testino"; readonly email: "testino@mail.com" }
  ] = ["success", { name: "Testino", email: "testino@mail.com" }];
  // se obtiene el mismo resultado declarando asi usando readonly en lugar de 'as const'
  // * pregunta a chatgpt caso de uso

  const error = ["error", new Error("Something went wrong!")] as const;

  if (Math.random() > 0.5) {
    return success;
  } else {
    return error;
  }
}

const [result, data] = getUser()

// type guards: se tiene certeza de ciertos tipos cuando se hace una comparacion
if (result === 'success') {
  // a este punto se tiene la certeza de los tipos haciendo una comparacion
  data; // const data: { readonly name: "Testino"; readonly email: "testino@mail.com"; }
  result; // const result: "success"
} else {
  result; // const result: "error"
  data; // const data: Error
}

