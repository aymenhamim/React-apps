function NotesItem({ note }) {
  const date = new Date().toDateString();
  console.log(date);
  return (
    <div>
      <p>{note.note}</p>

      <p>{note.createdAt}</p>
      {/* <p>{date.setUTCDate()}</p> */}
      <hr />
    </div>
  );
}

export default NotesItem;
