import { configureStore } from "@reduxjs/toolkit";
import notebooksSlice from "./notebooksSlice";

const store = configureStore({
  reducer: {
    notebooks: notebooksSlice,
  },
});

export default store;
