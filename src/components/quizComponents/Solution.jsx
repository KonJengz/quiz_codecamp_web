import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const solution = `function convertSecondsToTime( totalSeconds ) {
    const hours = Math.floor( totalSeconds / 3600 );
    const remaining = totalSeconds % 3600;
    const minutes = Math.floor( remaining / 60 );
    const seconds = remaining % 60;
    
    return \`\${hours}:\${minutes}:\${seconds}\`;
  }`;

function Solution() {
  return (
    <>
      <button className={`w-fit cursor-pointer px-2 pt-2`}>Solution</button>

      <SyntaxHighlighter language="javascript" style={oneDark}>
        {solution}
      </SyntaxHighlighter>
    </>
  );
}
export default Solution;
