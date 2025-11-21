import fs from "node:fs";

const path = "./src/notes.json";
const newNote = { id: 7, content: "Nueva nota" };

fs.readFile(path, "utf8", (err, content) => {
  if (err) {
    console.log(err);
    return;
  }

  const notes = JSON.parse(content);
  notes.push(newNote);

  fs.writeFile(path, JSON.stringify(notes), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
