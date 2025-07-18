export default function SnippetCreatePage() {
  return (
    <form className="flex flex-col gap-10">
      <h3 className="text-3xl font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input type="text" id="title" className="border rounded p-2 w-full" />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea id="code" className="border rounded p-2 w-full" />
        </div>
      </div>

      <button type="submit" className="rounded p-2 bg-blue-200">
        Submit Create
      </button>
    </form>
  );
}
