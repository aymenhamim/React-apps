import { useState } from "react";
import ListItem from "./ListItem";
import { IoCloseSharp } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

function List({ setTasks, tasks }) {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [editItem, setEditItem] = useState("");
  const [newTaskValue, setNewTaskValue] = useState("");
  const inputCss = "border border-stone-600 p-2 py-1 rounded-md ";

  const handleClick = () => {
    let checkIfExists = tasks.filter((task) => task === newTaskValue);

    if (checkIfExists[0]) {
      setIsModelOpen(false);
      setNewTaskValue("");
      toast.error("This Item Already Exists", {
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
    setIsModelOpen(false);
    setNewTaskValue("");
    toast.success("Updated Successfuly", {
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

    setTasks((prevItems) =>
      prevItems.map((item) => (item === editItem ? newTaskValue : item))
    );

    setIsModelOpen(false);
    setNewTaskValue("");
  };

  return (
    <>
      {isModelOpen && (
        <div className="min-w-full min-h-dvh absolute top-0 left-0 backdrop-blur-sm backdrop-brightness-50">
          <div className="w-[400px] h-[250px] bg-stone-50 absolute rounded-xl  right-[50%] translate-x-[50%] mt-32">
            <IoCloseSharp
              className=" text-xl absolute right-3 top-3 cursor-pointer"
              onClick={() => setIsModelOpen(false)}
            />
            <div className="flex flex-col justify-center items-center h-full gap-2">
              <div>
                <p className="text-[13px] font-semibold mb-1">Olde value</p>
                <input
                  type="text"
                  value={editItem}
                  readOnly
                  className={`${inputCss} `}
                />
              </div>

              <div>
                <p className="text-[13px] font-semibold mb-1">New value</p>
                <input
                  type="text"
                  value={newTaskValue}
                  onChange={(e) => setNewTaskValue(e.target.value)}
                  className={`${inputCss} `}
                />
              </div>

              <button
                className="bg-stone-800 text-stone-50 px-3 py-1 rounded-md ml-32 mt-2 text-sm m"
                onClick={handleClick}
              >
                save
              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="mt-5 bg-stone-700 p-5 text-stone-50 rounded-2xl   min-h-[350px] flex flex-col w-full">
        {tasks.map((task, key) => {
          return (
            <ListItem
              key={task}
              tasks={tasks}
              setTasks={setTasks}
              setIsModelOpen={setIsModelOpen}
              setEditItem={setEditItem}
            >
              {task}
            </ListItem>
          );
        })}
      </ul>
    </>
  );
}

export default List;
