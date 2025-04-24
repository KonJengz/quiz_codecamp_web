import MenuBar from "./components/MenuBar";
import QuizQuestionAdmin from "./components/QuizQuestionAdmin";
import { useCallback, useEffect, useState } from "react";
import { NotebookPen, BookText, LayoutGrid } from "lucide-react";
import useQuestionStore from "../../stores/questionStore.js";
import useCategoriesStore from "../../stores/categoriesStore";
import QuizCategoryAdmin from "./QuizCategoryAdmin.jsx";
import { ModalCreate } from "./components/ModalCreate.jsx";
import CreateQuestion from "./components/CreateQuestion.jsx";
import CreateCategory from "./components/CreateCategory.jsx";
import CreateLearn from "./components/CreateLearn.jsx";
import { createCategorySchema } from "../../utils/validator.js";

const menu = [
  {
    id: 1,
    icon: NotebookPen,
    label: "quiz",
    create: "Create Quize",
  },
  {
    id: 2,
    icon: LayoutGrid,
    label: "Category",
    create: "Create Category",
  },
  {
    id: 3,
    icon: BookText,
    label: "Learn",
    create: "Create Learn",
  },
];

function QuizAdmin() {
  const questions = useQuestionStore((state) => state.questions);
  const actionGetQuestions = useQuestionStore(
    (state) => state.actionGetQuestions
  );

  const { categories, actionCreateCategory, actionGetCategories } =
    useCategoriesStore();

  console.log("categories", categories);
  console.log("questions", questions);

  const [btnCreate, setBtnCreate] = useState(menu[0]);
  const [selectMenu, setSelectMenu] = useState(1);
  const [filterByCategory, setFilterByCategory] = useState([]);

  const handleSelectMenu = (menuId) => {
    const selectedMenu = menu.find((menuItem) => menuItem.id === menuId);
    setSelectMenu(menuId);
    setBtnCreate(selectedMenu);
  };

  const handleFilterByCategory = useCallback(
    (category) => {
      if (category === "") {
        setFilterByCategory(questions); // ใช้ questions
        return;
      }
      const result = questions?.filter(
        // ใช้ questions
        (question) => question?.category?.name === category
      );
      setFilterByCategory(result);
    },
    [questions]
  );

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const result = await actionGetQuestions();
        setFilterByCategory(result);
        await actionGetCategories({ status: "all", cha: false });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchQuestions();
  }, [actionGetCategories, actionGetQuestions]);

  const handleClickCreate = useCallback((menuId) => {
    if (menuId === 1) {
      document.getElementById("my_modal_1").showModal();
    } else if (menuId === 2) {
      document.getElementById("my_modal_2").showModal();
    } else if (menuId === 3) {
      document.getElementById("my_modal_3").showModal();
    }
  }, []);

  const hdlApi = (input) => {
    createCategorySchema.parse(input);
    actionCreateCategory(input);
  };

  return (
    <>
      <div className="px-8 py-4 space-y-4">
        <MenuBar
          handleClickCreate={handleClickCreate}
          categories={categories}
          menu={menu}
          handleSelectMenu={handleSelectMenu}
          selectMenu={selectMenu}
          btnCreate={btnCreate}
          handleFilterByCategory={handleFilterByCategory}
        />

        {selectMenu === 1 ? (
          <QuizQuestionAdmin filterByCategory={filterByCategory} />
        ) : selectMenu === 2 ? (
          <QuizCategoryAdmin />
        ) : null}
      </div>

      <ModalCreate idModal={btnCreate?.id}>
        {btnCreate?.id === 1 && <CreateQuestion />}
        {btnCreate?.id === 2 && (
          <CreateCategory
            hdlApi={hdlApi}
            text={btnCreate?.create}
            idModal={btnCreate?.id}
          />
        )}
        {btnCreate?.id === 3 && <CreateLearn />}
      </ModalCreate>
    </>
  );
}
export default QuizAdmin;
