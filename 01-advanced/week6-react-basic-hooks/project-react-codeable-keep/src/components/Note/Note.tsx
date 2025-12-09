type NoteProps = {
  title: string;
  content: string;
  color: string;
};

const Note = ({ title, content, color }: NoteProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
      <p>{color}</p>
    </div>
  );
};

export default Note;
