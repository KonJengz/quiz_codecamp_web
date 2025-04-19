import useQuestionStore from "../../stores/questionStore.js";

function Container() {
  const question = useQuestionStore((state) => state.question);

  return (
    <div className="flex flex-col flex-5/12 bg-gray-q-1/8 rounded-xl p-4 pl-6 h-full overflow-auto max-w-[600px]">
      <pre>{question?.description}</pre>
    </div>
  );
}

export default Container;
