import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { useRef } from "react";

/**
 * @typedef {{
 * code: string
 *  hdlEdit: (string) => void
 * }}
 */
var CodeEditorPropTypes;

/**
 *
 * @param {CodeEditorPropTypes} prop
 * @returns
 */
export default function CodeEditor({ code, hdlEdit }) {
  const editorRef = useRef(null);
  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  return (
    <div className="flex">
      <>
        <Editor
          height="40vh"
          width="90vw"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onMount={handleEditorDidMount}
          onChange={hdlEdit}
        />
      </>
    </div>
  );
}
