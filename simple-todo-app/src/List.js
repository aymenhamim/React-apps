import { AiOutlineDelete } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import ListItem from "./ListItem";

function List({ setTasks, tasks }) {
  return (
    <ul className="mt-5 bg-stone-700 p-5 text-stone-50 rounded-2xl   min-h-[350px] flex flex-col w-full">
      {tasks.map((task, key) => {
        return (
          <ListItem key={task} tasks={tasks} setTasks={setTasks}>
            {task}
          </ListItem>
        );
      })}
    </ul>
  );
}

export default List;
