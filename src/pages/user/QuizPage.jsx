import React from "react";
import SideBarMenu from "../../components/quizComponents/SideBarMenu";
import Container from "../../components/quizComponents/Container";
import CodeSideBar from "../../components/quizComponents/CodeSideBar";
import { useNavigate, useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { useCallback } from "react";
import useQuestionStore from "../../stores/questionStore.js";
import useCategoriesStore from "../../stores/categoriesStore.js";

function QuizPage() {
  const { categoryId } = useParams();

  const navigate = useNavigate();

  const { question, questions, actionGetQuestionsAndMeByCategoryId } =
    useQuestionStore();
  const { setCategory } = useCategoriesStore(); // Return the user back to main page if they // get to this page directly
  if (!categoryId || categoryId.length < 5) navigate("/");

  const useFetchQuestionByCatId = useCallback(async () => {
    const category = await actionGetQuestionsAndMeByCategoryId(categoryId);
    delete category.questions;
    setCategory(category);
  }, [categoryId, actionGetQuestionsAndMeByCategoryId]);

  const { isLoading, error } = useFetch(useFetchQuestionByCatId);

  if (isLoading) return <div>Loading...</div>;

  if (error) throw new Error(error?.message);

  // Questions list

  return (
    <div className="grid">
      <div className="flex gap-4 justify-between px-8 py-4 pb-8">
        <SideBarMenu questions={questions} />
        <Container />
        <CodeSideBar question={question} />
      </div>
    </div>
  );
}

export default QuizPage;
