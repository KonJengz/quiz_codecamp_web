// src/Editor.js
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs"; // Import Editor.js
import Header from "@editorjs/header"; // Optional: Import the header plugin
import List from "@editorjs/list"; // Optional: Import the list plugin
import ImageTool from "@editorjs/image"; // Optional: Import the image plugin
import eHTML from "editorjs-html";
import Quote from "@editorjs/quote";

const editorJSHtml = eHTML();

const editorFactory = (reactRef, onChange, placeholder = "") =>
  new EditorJS({
    holder: reactRef.current,
    placeholder,
    tools: {
      // header: { inlineToolbar: false },
      header: Header, // Add Header plugin
      list: List, // Add List plugin
      quote: Quote,
      //   image: ImageTool, // Add Image plugin
    },
    onChange: async (api) => {
      const data = await api.saver.save();
      const parse = editorJSHtml.parse(data);
      console.log("PARSE", parse);
      onChange && onChange(parse);
    },
    // data: {
    //   // Initial data if you want to load content into the editor
    // },
  });

const Editor = ({ onChange, placeholder = "Input here" }) => {
  const editorRef = useRef(null); // Use ref to target the editor div
  useEffect(() => {
    const editor = editorFactory(editorRef, onChange, placeholder);

    // Cleanup function to destroy the editor instance when the component unmounts
    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((error) => console.error("Error destroying editor:", error));
    };
  }, []);

  return (
    <div>
      <div className="bg-[#CCCCCC] rounded-[9px]" ref={editorRef}></div>{" "}
      {/* This is where the editor will be rendered */}
    </div>
  );
};

export default Editor;
