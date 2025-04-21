import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Solution({ solution }) {
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
