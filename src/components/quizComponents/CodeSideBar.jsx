import EditorWrapper from "../monaco_test/layout/EditorLayout";
import Solution from "./Solution";

function CodeSideBar() {
  return (
    <div className="flex flex-col gap-2 flex-5/12">
      <div className="flex flex-col text-sm">
        <Solution />
      </div>

      <>
        <EditorWrapper />
      </>
    </div>
  );
}

export default CodeSideBar;
