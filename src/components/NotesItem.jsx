import { showFormattedDate } from "../utils/data";

const NotesItem = ({
  id,
  title,
  body,
  archived,
  createdAt,
  onDelete,
  onArchive,
}) => {
  const words = body.split(" ").slice(0, 9).join(" ");
  const formatedTime = showFormattedDate(createdAt);
  return (
    <div className="notes-item">
      <h1>{title}</h1>
      <p>{formatedTime}</p>
      <p>{words} ...</p>
      <div className="button-group">
        <button onClick={() => onArchive(id)}>
          <span>{archived ? "Unarchive" : "Archive"}</span>
        </button>
        <button onClick={() => onDelete(id)}>
          <span>Hapus</span>
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
