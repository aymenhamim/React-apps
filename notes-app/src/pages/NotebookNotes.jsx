import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SideBar from "../components/side-bar/SideBar";
import NotesList from "../components/notes/NotesList";
import HeaderNotebook from "../components/notebooks/HeaderNotebook";

function NotebookNotes() {
  const { id } = useParams();
  const notebooks = useSelector((state) => state.notebooks.notebooks);
  const [notebook] = notebooks?.filter((nb) => nb.notebookId == id);

  console.log(notebook);
  return (
    <div>
      <SideBar />
      <div>
        <HeaderNotebook />
        {notebook && (
          <>
            <p>
              NotebookNotes {id} - {notebook.title}
            </p>
            <NotesList list={notebook} />
          </>
        )}
      </div>
    </div>
  );
}

export default NotebookNotes;
