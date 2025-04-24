import { PencilLine } from "lucide-react";
import Toggle from "./Toggle";
import categoiesApi from "../../../api/categoriesApi";
import useCategoriesStore from "../../../stores/categoriesStore";

function QuizCategoryAdminItem({ category, hdlEditCategory }) {
  const actionGetCategories = useCategoriesStore(
    (state) => state.actionGetCategories
  );
  const hdlClicktoggle = async (categoryId) => {
    console.log("categoryId", categoryId);
    try {
      await categoiesApi.updateCategoryStatus(categoryId);
      await actionGetCategories({ status: "all", cha: false });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center gap-3 p-8 rounded-3xl bg-white text-black text-center hover:shadow-1 cursor-pointer border hover:border-pink-q">
        <h1>
          {category.name} ({category.questions?.length})
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => {
              hdlEditCategory(category);
              document.getElementById(`my_modal_edit`).showModal();
            }}
            className="flex gap-1 items-center text-gray-q-2 hover:text-gray-q-2/70 cursor-pointer"
          >
            <PencilLine strokeWidth={1.5} width={20} height={20} />
            <span>Edit</span>
          </button>
          <Toggle
            isToggle={!category.deletedAt}
            hdlClicktoggle={() => hdlClicktoggle(category.id)}
          />
        </div>
      </div>
    </>
  );
}
export default QuizCategoryAdminItem;
