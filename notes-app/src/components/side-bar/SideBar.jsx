import { useDispatch, useSelector } from "react-redux";
import NotebooksList from "../notebooks/NotebooksList";
import { useState } from "react";
import { addNotebook } from "../../store/notebooksSlice";

function SideBar() {
  const notebooks = useSelector((state) => state.notebooks.notebooks);
  const dispatch = useDispatch();

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newNotebook, setNewNotebook] = useState("");

  function handleClickOnAddButton() {
    setIsAddOpen(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newNotebook) {
      dispatch(
        addNotebook({
          notebookId: Math.round(Math.random() * 2000),
          title: newNotebook,
          notes: [],
        })
      );
      setIsAddOpen(false);
      setNewNotebook("");
    }
  }

  return (
    <div>
      <h1>Think 2 Note </h1>
      <p>
        NOTEBOOKS <button onClick={handleClickOnAddButton}> +</button>
      </p>
      <NotebooksList list={notebooks} />
      {isAddOpen && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newNotebook}
            onChange={(e) => setNewNotebook(e.target.value)}
            autoFocus
          />
        </form>
      )}
    </div>
  );
}

export default SideBar;
