import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  deleteNotebook,
  enableEditMode,
  updateNotebook,
} from "../../store/notebooksSlice";
import { useState } from "react";

function NotebooksItem({ notebook }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isNotebookEdit, curNotebook } = useSelector(
    (state) => state.notebooks
  );
  const [newTitle, setNewTitle] = useState(notebook.title || "");

  function handleSubmit(e) {
    if (newTitle) {
      const newNotebook = { title: newTitle, id: notebook.notebookId };
      e.preventDefault();
      dispatch(updateNotebook(newNotebook));
    }
  }

  function triggerEditButton(id) {
    dispatch(enableEditMode(id));
  }

  function handleDelete(id) {
    navigate("/");
    dispatch(deleteNotebook(id));
  }

  return (
    <>
      {!isNotebookEdit ? (
        <li>
          <NavLink to={`/notebooks/${notebook.notebookId}`}>
            {notebook?.title}
          </NavLink>
          <button onClick={() => handleDelete(notebook.notebookId)}>X</button>
          <button onClick={() => triggerEditButton(notebook.notebookId)}>
            +
          </button>
        </li>
      ) : curNotebook === notebook.notebookId ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter new title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </form>
      ) : (
        <li>
          <NavLink to={`/notebooks/${notebook.notebookId}`}>
            {notebook?.title}
          </NavLink>
          <button onClick={() => handleDelete(notebook.notebookId)}>X</button>
          <button onClick={() => triggerEditButton(notebook.notebookId)}>
            +
          </button>
        </li>
      )}
    </>
  );
}

export default NotebooksItem;
