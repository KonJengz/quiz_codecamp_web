/**
 * @typedef {{
 *  logs: string[]
 * isError: boolean
 * }}
 */
var ConsolePropTypes;

/**
 *
 * @param {ConsolePropTypes} prop
 * @returns
 */
export default function Console({ logs, isError }) {
  return (
    <>
      <div className="bg-[#1e1e1e] min-h-40 py-2 px-4 rounded-xl">
        <h1>Console</h1>
        {logs.map((log, index) => (
          <p key={index} className={`${isError ? "text-red-500" : ""}`}>
            {log}
          </p>
        ))}
      </div>
    </>
  );
}
