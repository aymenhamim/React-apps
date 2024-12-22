import Quran from "./components/Quran";
import "./index.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-dvh bg-stone-100 p-0 m-0">
      <Quran />
    </div>
  );
}

export default App;
