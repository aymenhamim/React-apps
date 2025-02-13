import NotebooksItem from "./NotebooksItem";

function NotebooksList({ list }) {
  return (
    <ul>
      {list?.map((nb) => (
        <NotebooksItem key={nb.notebookId} notebook={nb} />
      ))}
    </ul>
  );
}

export default NotebooksList;
