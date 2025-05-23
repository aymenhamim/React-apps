"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import {
  BoldIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  UnderlineIcon,
} from "lucide-react";
import "./RteEditorStyles.css";
import { useEffect } from "react";

function Tiptap({
  value = "",
  onChange = () => {},
  placeholder = "Start typing...",
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    content: value || `<p>${placeholder}</p>`,

    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none min-h-[250px] min-w-[300px]",
      },
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  // ! update editor content when value prop change
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || `<p>${placeholder}</p>`);
    }
  }, [editor, value, placeholder]);

  if (!editor) {
    return null;
  }

  const saveContent = () => {
    if (editor) {
      console.log(editor.getHTML());
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full py-2">
        <div className="flex space-x-2 my-4">
          {/* Heading */}

          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`border border-stone-500 cursor-pointer rounded-md p-1 ${editor.isActive("heading", { level: 1 }) ? "bg-gray-300" : ""}`}
          >
            <Heading1Icon />
          </button>

          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`border border-stone-500 cursor-pointer rounded-md p-1 ${editor.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""}`}
          >
            <Heading2Icon />
          </button>

          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={`border border-stone-500 cursor-pointer rounded-md p-1 ${editor.isActive("heading", { level: 3 }) ? "bg-gray-300" : ""}`}
          >
            <Heading3Icon />
          </button>

          {/* Bold */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`border border-stone-500 cursor-pointer rounded-md p-1  ml-3 ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
          >
            <BoldIcon />
          </button>

          {/* ITALIC */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`border border-stone-500  cursor-pointer rounded-md p-1 ${editor.isActive("italic") ? "bg-gray-300" : ""}`}
          >
            <ItalicIcon />
          </button>

          {/* Underline */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`border border-stone-500  cursor-pointer rounded-md p-1 ${
              editor.isActive("underline") ? "bg-gray-300" : ""
            }`}
          >
            <UnderlineIcon />
          </button>

          {/* List */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`border border-stone-500  cursor-pointer rounded-md  p-1 ${
              editor.isActive("bulletList") ? "bg-gray-300" : ""
            }`}
          >
            <ListIcon />
          </button>

          {/* Ordered List */}

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`border border-stone-500  cursor-pointer rounded-md p-1 ${
              editor.isActive("orderedList") ? "bg-gray-300" : ""
            }`}
          >
            <ListOrderedIcon />
          </button>
        </div>

        <EditorContent editor={editor} className="border rounded-lg p-2" />
      </div>
    </div>
  );
}

export default Tiptap;
