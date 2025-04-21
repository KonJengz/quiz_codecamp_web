import { PencilLine } from "lucide-react";

function QuizCategoryAdmin({ categories }) {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        {categories?.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-white text-black text-center"
          >
            <h1>
              {category.name} ({category.questions?.length})
            </h1>

            <button className="flex gap-1 items-center text-gray-q-2 hover:text-gray-q-2/70 cursor-pointer">
              <PencilLine strokeWidth={1.5} width={20} height={20} />
              <span>Edit</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default QuizCategoryAdmin;
