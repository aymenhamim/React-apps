import { useSelector } from "react-redux";
import NotebooksList from "../notebooks/NotebooksList";

function SideBar() {
  const notebooks = useSelector((state) => state.notebooks.notebooks);
  console.log(notebooks);
  return (
    <div>
      <h1>Think 2 Note </h1>
      <p>
        NOTEBOOKS <span> +</span>
      </p>
      <NotebooksList list={notebooks} />
    </div>
  );
}

export default SideBar;
