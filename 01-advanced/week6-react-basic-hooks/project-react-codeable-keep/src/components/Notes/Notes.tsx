import styles from "./Notes.module.css";

export type Note = {
  id: string;
  title: string;
  body: string;
  color: string;
};

type NotesProps = {
  notes: Note[];
  onDelete: (noteId: string) => void;
};

const Notes = ({ notes, onDelete }: NotesProps) => {
  return (
    <div>
      Notes
      {notes.map((note) => {
        return (
          <div
            key={note.id}
            className={styles.note}
            style={{ backgroundColor: note.color }}
          >
            <p>{note.title}</p>
            <p>{note.body}</p>
            <button onClick={() => onDelete(note.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
