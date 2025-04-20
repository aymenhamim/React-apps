import { BrowserRouter, Route, Routes } from "react-router-dom";
import UerLayout from "./layouts/Layout";
import NotePreview from "./pages/NotePreview";
import NotebookNotes from "./pages/NotebookNotes";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<UerLayout />} />
        <Route path="/notebooks/:id" element={<NotebookNotes />} />
        <Route path="/:notebook/:note" element={<NotePreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
