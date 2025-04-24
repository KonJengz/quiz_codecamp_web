import { useState } from "react";
import useCategoriesStore from "../../stores/categoriesStore";
import { createCategorySchema } from "../../utils/validator";
import CreateCategory from "./components/CreateCategory";
import { ModalCreate } from "./components/ModalCreate";
import QuizCategoryAdminItem from "./components/QuizCategoryAdminItem";

function QuizCategoryAdmin() {
  const [editCategory, setEditCategory] = useState(null);
  const categories = useCategoriesStore((state) => state.categories);
  const { actionEditCategoryById } = useCategoriesStore();

  console.log("editCategory", editCategory);

  const hdlApi = (input) => {
    createCategorySchema.parse(input);
    if (editCategory === null) return;
    actionEditCategoryById(editCategory.id, {
      ...input,
      categoryId: editCategory.id,
    });
  };

  const hdlEditCategory = (categoryEdit) => {
    setEditCategory(categoryEdit);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-5 2xl:gap-4 gap-4">
        {categories?.map((category) => (
          <QuizCategoryAdminItem
            key={category.id}
            category={category}
            hdlEditCategory={hdlEditCategory}
          />
        ))}
      </div>

      <ModalCreate idModal={"edit"}>
        <CreateCategory
          idModal={"edit"}
          text={"Edit Category"}
          hdlApi={hdlApi}
          categoryEdit={editCategory}
        />
      </ModalCreate>
    </>
  );
}
export default QuizCategoryAdmin;
