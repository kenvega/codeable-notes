import { useState, useEffect } from "react";
import { API_URL } from "../../constants/url";
import NewNote from "../NewNote";
import Notes, { type Note } from "../Notes";

type NotesAppProps = {
  username: string;
};

const NotesApp = ({ username }: NotesAppProps) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/${username}/notes`)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setNotes(data.notes);
        } else {
          throw Error(
            `Error in server fetching notes: ${JSON.stringify(data)}`
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, [username]);

  const handleDelete = (noteId: string) => {
    fetch(`${API_URL}/${username}/notes/${noteId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // filter the deleted note from the state. no need to fetch again
          setNotes((prevNotes) =>
            prevNotes.filter((note) => note.id !== noteId)
          );
        } else {
          throw Error(
            `Error in server deleting note ${noteId}: ${JSON.stringify(data)}`
          );
        }
      })
      .catch((error) => {
        console.error(`Error deleting note ${noteId}:`, error);
      });
  };

  const handleCreate = ({
    title,
    body,
    color = "#AAA",
  }: {
    title: string;
    body: string;
    color?: Note["color"];
  }) => {
    return fetch(`${API_URL}/${username}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, color }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok && data.note) {
          // add the note to the state at the end. no need to fetch again
          setNotes((prevNotes) => [...prevNotes, data.note]);
        } else {
          throw Error(`Error in server creating note: ${JSON.stringify(data)}`);
        }
      })
      .catch((error) => {
        console.error("Error creating note:", error);
        throw error;
      });
  };

  return (
    <div>
      Welcome to Codeable Keep {username}
      <hr />
      <NewNote onCreate={handleCreate} />
      <Notes notes={notes} onDelete={handleDelete} />
    </div>
  );
};

export default NotesApp;
