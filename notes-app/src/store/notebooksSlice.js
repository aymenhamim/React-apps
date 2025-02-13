import { createSlice } from "@reduxjs/toolkit";

const notebooksSlice = createSlice({
  name: "notebooks",
  initialState: {
    ModalOpen: false,
    isNotebookEdit: false,
    isNoteEdit: false,
    curNotebook: "",
    curNote: "",
    notebooks: [
      {
        notebookId: 1,
        title: "Javascript",
        notes: [
          { noteId: 1, createdAt: Date.now(), note: "This my First note" },
          { noteId: 2, createdAt: Date.now(), note: "This my Second note" },
          { noteId: 3, createdAt: Date.now(), note: "This my Third note" },
        ],
      },
      {
        notebookId: 2,
        title: "React",
        notes: [
          { noteId: 1, createdAt: Date.now(), note: "This my First note 2" },
          { noteId: 2, createdAt: Date.now(), note: "This my Second note 2" },
          { noteId: 3, createdAt: Date.now(), note: "This my Third note 2" },
        ],
      },
    ],
  },
  reducers: {
    // notebooks
    addNotebook(state, action) {
      state.notebooks.push(action.payload);
    },

    deleteNotebook(state, action) {
      state.notebooks = state.notebooks.filter(
        (nb) => nb.notebookId !== action.payload
      );
    },

    enableEditMode(state, action) {
      state.isNotebookEdit = true;
      state.curNotebook = action.payload;
    },

    updateNotebook(state, action) {
      state.isNotebookEdit = false;
      state.curNotebook = "";

      state.notebooks = state.notebooks.map((nb) =>
        nb.notebookId === action.payload.id
          ? { ...nb, title: action.payload.title }
          : nb
      );
    },
  },
});

export const { addNotebook, deleteNotebook, enableEditMode, updateNotebook } =
  notebooksSlice.actions;

export default notebooksSlice.reducer;
