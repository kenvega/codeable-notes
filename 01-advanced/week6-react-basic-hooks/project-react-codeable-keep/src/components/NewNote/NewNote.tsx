import { useState, type FormEvent } from "react";

type NewNoteProps = {
  onCreate: (note: { title: string; body: string }) => Promise<void> | void;
};

const NewNote = ({ onCreate }: NewNoteProps) => {
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteBody, setNewNoteBody] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNoteTitle(e.target.value);
  };
  const handleChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNoteBody(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    Promise.resolve(onCreate({ title: newNoteTitle, body: newNoteBody }))
      .then(() => {
        setNewNoteTitle("");
        setNewNoteBody("");
      })
      .catch((error) => {
        console.error("Error creating note:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newNoteTitle}
          onChange={handleChangeTitle}
        />
        <input
          type="text"
          placeholder="Your note..."
          value={newNoteBody}
          onChange={handleChangeBody}
        />
        <button type="submit">Keep it!</button>
      </form>
    </div>
  );
};

export default NewNote;
