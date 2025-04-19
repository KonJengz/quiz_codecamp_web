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
export default function CodeEditor({ code, hdlEdit, defaultValue = "" }) {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  return (
    <div className="py-4 bg-[#1e1e1e] rounded-xl">
      <Editor
        height="35vh"
        width="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onMount={handleEditorDidMount}
        onChange={hdlEdit}
        defaultValue={defaultValue}
      />
    </div>
  );
}
