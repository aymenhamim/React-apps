import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌍️</p>",
    editorProps: {
      attributes: {
        class: "prose prose-sm m-0 focus:outline-none",
      },
    },
  });
  return <div></div>;
}

export default Tiptap;
