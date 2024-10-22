import NotesItem from "./NotesItem";

const NotesList = ({ notes, onDelete }) => {
  return (
    <div className="list-notes">
      {notes.map((note) => (
        <NotesItem key={note.id} {...note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NotesList;
