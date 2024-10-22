const NotesItem = ({ id, title, body, archived, createdAt, onDelete }) => {
  return (
    <div className="notes-item">
      <h1>{title}</h1>
      <p>{createdAt}</p>
      <p>{body}</p>
      <button>{archived ? "Unarchive" : "Archive"}</button>
      <button onClick={() => onDelete(id)}>Hapus</button>
    </div>
  );
};

export default NotesItem;
