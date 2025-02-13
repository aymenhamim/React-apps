import { BrowserRouter, Route, Routes } from "react-router-dom";
import UerLayout from "./layouts/Layout";
import NotePreview from "./pages/NotePreview";
import NotebookNotes from "./pages/NotebookNotes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UerLayout />} />
        <Route path="/:notebook" element={<NotebookNotes />} />
        <Route path="/:notebook/:note" element={<NotePreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
