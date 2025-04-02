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
      <div className="bg-[#222222] min-h-40vh">
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
