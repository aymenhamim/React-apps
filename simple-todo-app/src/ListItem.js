import { AiOutlineDelete } from "react-icons/ai";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEditSquare } from "react-icons/md";

function ListItem({ setEditItem, setIsModelOpen, setTasks, tasks, children }) {
  const ListItemTailwind =
    "flex items-center justify-between px-10 py-2 bg-stone-100 text-stone-700 rounded-lg font-semibold mb-2";

  const handleUpdate = () => {
    setIsModelOpen(true);
    setEditItem((editItem) => (editItem = children));
  };

  let handleDelete = () => {
    setTasks([...tasks.filter((task1) => task1 !== children)]);

    toast.success("Item's Deleted", {
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
  };
  return (
    <>
      <li>
        {children}
        <div className="flex text-2xl gap-4">
          <MdEditSquare
            className="text-cyan-700 cursor-pointer"
            onClick={handleUpdate}
          />

          <AiOutlineDelete
            className="text-red-500 cursor-pointer"
            onClick={handleDelete}
          />
        </div>
      </li>
    </>
  );
}

export default ListItem;
