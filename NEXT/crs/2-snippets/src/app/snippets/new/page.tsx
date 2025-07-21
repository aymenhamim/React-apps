"use client";

import { createSnippet } from "@/actions";
import { useActionState } from "react";

export default function SnippetCreatePage() {
  const [formState, action] = useActionState(createSnippet, { message: "" });

  return (
    <form className="flex flex-col gap-10" action={action}>
      <h3 className="text-3xl font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            type="text"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>
      </div>

      <div>{formState.message}</div>

      <button type="submit" className="rounded p-2 bg-blue-200">
        Submit Create
      </button>
    </form>
  );
}
