import CodeEditor from "../components/CodeEditor";
import Console from "../components/Console";
import { useState } from "react";
import executeApi from "../../../api/executeApi";
import submitApi from "../../../api/submitApi";

export default function EditorWrapper() {
  const [code, setCode] = useState("");
  const [logs, setLogs] = useState([]);
  const [isError, setIsError] = useState(false);

  async function hdlExecute(code) {
    if (!code || !code.trim()) return;
    const resp = await executeApi.execute({ code });
    if (!resp.data.isError && resp.data.logs) {
      setLogs(resp.data.logs);
      setIsError(false);
      return;
    }
    setLogs([resp.data.errMsg.split("\n")[0]]);
    setIsError(true);
  }

  async function hdlSubmit(code) {
    if (!code || !code.trim()) return;
    const resp = await submitApi.submit({ code, questionId: "df" });
    console.log(resp);
  }

  function handleEditCode(value) {
    setCode(value);
  }

  return (
    <div className="flex">
      <div className="flex-col min-h-screen">
        <CodeEditor code={code} hdlEdit={handleEditCode} />
        <Console isError={isError} logs={logs} />
      </div>
      <div className="flex-col gap-2">
        <p>Test</p>
        <button
          className="bg-red-400 hover:cursor-pointer"
          onClick={() => hdlExecute(code)}
        >
          RUN!
        </button>
        <button
          className="bg-purple-400 hover:cursor-pointer"
          onClick={() => hdlSubmit(code)}
        >
          SUBMIT!
        </button>
      </div>
    </div>
  );
}
