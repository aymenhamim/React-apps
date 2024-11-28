import { useState } from "react";
import "./App.css";
import List from "./List";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseSharp } from "react-icons/io5";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const isOpen = tasks.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    let checkIfExists = tasks.filter((task) => task === newTask.trim());
    let errorMessage = !checkIfExists[0]
      ? "Cannot add empty text"
      : "This Item already exists";

    if (newTask.trim() === "" || checkIfExists[0]) {
      toast.error(errorMessage, {
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
      setNewTask("");
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <>
      <div className={`w-[60%]  mx-auto mt-20 `}>
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <input
            type="text"
            className="border-stone-900 border p-4 w-[80%] rounded-full rounded-r-none outline-none"
            placeholder="Enter what you need"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="bg-stone-900 border text-stone-50 p-4 w-[19%]  rounded-r-full border-stone-900  hover:bg-stone-800 font-semibold ml-[-1px]">
            Add
          </button>
        </form>
        {isOpen && <List tasks={tasks} setTasks={setTasks} />}
      </div>
    </>
  );
}

export default App;
