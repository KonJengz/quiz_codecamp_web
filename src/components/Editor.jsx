// src/Editor.js
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs"; // Import Editor.js
import Header from "@editorjs/header"; // Optional: Import the header plugin
import List from "@editorjs/list"; // Optional: Import the list plugin
import ImageTool from "@editorjs/image"; // Optional: Import the image plugin

const Editor = () => {
  const editorRef = useRef(null); // Use ref to target the editor div

  useEffect(() => {
    const editor = new EditorJS({
      holder: editorRef.current, // Attach Editor.js to the div
      placeholder: "Enter Detail Quiz",
      tools: {
        // header: { inlineToolbar: false },
        // header: Header, // Add Header plugin
        //   list: List, // Add List plugin
        //   image: ImageTool, // Add Image plugin
      },
      data: {
        // Initial data if you want to load content into the editor
      },
    });

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
