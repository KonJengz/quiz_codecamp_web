import React from "react";
import SideBarMenu from "../../components/quizComponents/SideBarMenu";
import Container from "../../components/quizComponents/Container";
import CodeSideBar from "../../components/quizComponents/CodeSideBar";

function QuizPage() {
  return (
    <div className="grid">
      <div className="flex gap-4 justify-between px-8 py-4 pb-8">
        <SideBarMenu />
        <Container />
        <CodeSideBar />
      </div>
    </div>
  );
}

export default QuizPage;
