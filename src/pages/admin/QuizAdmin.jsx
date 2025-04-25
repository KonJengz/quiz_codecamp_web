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

/**
 * @typedef {{
 *  id: number
 *  icon: React.ForwardRefExoticComponent
 *  label: string
 *  create: string
 * }}
 */
export var menuUIType;

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
  // GRAB the Questions state and fetch fn from store.
  const { questions, setFilterQuestions, actionGetQuestions } =
    useQuestionStore();

  // GRAB the Categories state, create and fetch fn from store.
  const { actionCreateCategory, actionGetCategories } = useCategoriesStore();

  // Local state
  const [btnCreate, setBtnCreate] = useState(menu[0]);
  const [selectMenu, setSelectMenu] = useState(1);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  const handleSelectMenu = (menuId) => {
    setSelectMenu(menuId);
    setBtnCreate(menu[menuId - 1]);
  };

  /**
   *
   * @param {String} categoryName
   * @returns void
   */
  function hdlSelectCategory(categoryName) {
    setSelectedCategoryName(categoryName);
    setFilterQuestions(categoryName);
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Fetch fn
        await Promise.all([
          actionGetQuestions(),
          actionGetCategories({ status: "all", cha: false }),
        ]);

        setFilterQuestions(selectedCategoryName);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchQuestions();
  }, [actionGetCategories, actionGetQuestions]);

  const handleClickCreate = useCallback((menuId) => {
    document.getElementById(`my_modal_${menuId}`).showModal();
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
          menu={menu}
          handleSelectMenu={handleSelectMenu}
          selectMenu={selectMenu}
          btnCreate={btnCreate}
          hdlSelectCategory={hdlSelectCategory}
        />

        {selectMenu === 1 ? (
          <QuizQuestionAdmin />
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
