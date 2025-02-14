import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SideBar from "../components/side-bar/SideBar";
import NotesList from "../components/notes/NotesList";

function NotebookNotes() {
  const { id } = useParams();
  const notebooks = useSelector((state) => state.notebooks.notebooks);
  const [notebook] = notebooks?.filter((nb) => nb.notebookId == id);

  console.log(notebook);
  return (
    <div>
      <SideBar />
      <div></div>
      {notebook && (
        <>
          <p>
            NotebookNotes {id} - {notebook.title}
          </p>
          <NotesList list={notebook} />
        </>
      )}
    </div>
  );
}

export default NotebookNotes;
