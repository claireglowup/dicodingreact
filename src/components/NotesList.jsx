import NotesItem from "./NotesItem";
import "../styles/item.css";
//
const NotesList = ({ notes, onDelete, onArchive }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <>
      <div className="active-notes">
        <h1 className="header-list">Catatan Aktif 📃</h1>
        <div className="list-notes">
          {activeNotes.length > 0 ? (
            activeNotes.map((note) => (
              <NotesItem
                key={note.id}
                {...note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))
          ) : (
            <p>Tidak ada catatan aktif</p>
          )}
        </div>
      </div>

      <div className="archive-notes">
        <h1 className="header-list">Catatan Arsip 📑</h1>
        <div className="list-notes">
          {archivedNotes.length > 0 ? (
            archivedNotes.map((note) => (
              <NotesItem
                key={note.id}
                {...note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))
          ) : (
            <p>Tidak ada catatan diarsipkan</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NotesList;
