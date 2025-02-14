import NotesItem from "./NotesItem";

function NotesList({ list }) {
  return (
    <div>
      {list.notes.map((nt) => (
        <div key={nt.noteId}>
          <p>{list.title}</p>
          <NotesItem note={nt} />
        </div>
      ))}
    </div>
  );
}

export default NotesList;
