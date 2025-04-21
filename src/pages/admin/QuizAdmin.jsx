import MenuBar from "./components/MenuBar";
import QuizQuestionAdmin from "./components/QuizQuestionAdmin";
import { useEffect, useState } from "react";
import { NotebookPen, BookText, LayoutGrid } from "lucide-react";
import useQuestionStore from "../../stores/questionStore.js";
import useCategoriesStore from "../../stores/categoriesStore";
import QuizCategoryAdmin from "./QuizCategoryAdmin.jsx";

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
  const categories = useCategoriesStore((state) => state.categories);
  const actionGetCategoriesQuery = useCategoriesStore(
    (state) => state.actionGetCategoriesQuery
  );

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

  const handleFilterByCategory = (category) => {
    if (category === "") {
      setFilterByCategory(questions);
      return;
    }
    const result = questions?.filter(
      (question) => question?.category?.name === category
    );
    setFilterByCategory(result);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const result = await actionGetQuestions();
        setFilterByCategory(result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchQuestions();
    actionGetCategoriesQuery(false);
  }, []);

  console.log("filterByCategory", filterByCategory);

  return (
    <div className="px-8 py-4 space-y-4">
      <MenuBar
        categories={categories}
        menu={menu}
        handleSelectMenu={handleSelectMenu}
        selectMenu={selectMenu}
        btnCreate={btnCreate}
        handleFilterByCategory={handleFilterByCategory}
      />

      {selectMenu === 1 ? (
        <QuizQuestionAdmin questions={filterByCategory} />
      ) : selectMenu === 2 ? (
        <QuizCategoryAdmin categories={categories} />
      ) : null}
    </div>
  );
}
export default QuizAdmin;
