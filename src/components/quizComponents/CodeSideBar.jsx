import Solution from "./Solution";
import EditorWrapper from "../../features/questions/layout/EditorLayout";

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
