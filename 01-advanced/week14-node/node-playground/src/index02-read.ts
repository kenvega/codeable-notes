import fs from "node:fs";

// 2do parametro es un callback que se ejecuta cuando termina la lectura del archivo
// el parámetro content es del tipo Buffer
//   es una estructura que almacena los datos como una secuencia de bytes
//   debemos indicar el tipo de codificación a utilizar (UTF-8)
//     UTF-8 es una de las codificaciones de caracteres más comunes para texto en la web
//       especialmente para archivos de texto (como JSON) ya que preserva caracteres especiales, acentos y otros símbolos
fs.readFile("./src/notes.json", "utf8", (err, content) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(content);
});

// const newNote = { id: 7, content: "Nueva nota " };

// fs.writeFile("./src/notes.json", JSON.stringify(newNote), (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
