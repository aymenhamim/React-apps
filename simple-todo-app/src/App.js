import { useState } from "react";
import "./App.css";
import List from "./List";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const isOpen = tasks.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask.trim() === "") {
      toast.error("Cannot add empty text", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div className="w-[60%]  mx-auto mt-20">
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <input
          type="text"
          className="border-stone-900 border p-4 w-[80%] rounded-full rounded-r-none outline-none"
          placeholder="Enter what you need"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-stone-900 text-stone-50 p-4 w-[18%] ml-[1px] rounded-r-full border-stone-300 border hover:bg-stone-800 font-semibold">
          Add
        </button>
        {isOpen && <List tasks={tasks} setTasks={setTasks} />}
      </form>
    </div>
  );
}

export default App;
