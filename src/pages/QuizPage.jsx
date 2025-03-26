import React from 'react'
import CodeSideBar from '../components/quizComponents/CodeSideBar'
import Container from '../components/quizComponents/Container'
import SideBarMenu from '../components/quizComponents/SideBarMenu'

function QuizPage() {
  return (
    <div>
    <SideBarMenu/>
    <Container/>
    <CodeSideBar/>

    </div>
  )
}

export default QuizPage