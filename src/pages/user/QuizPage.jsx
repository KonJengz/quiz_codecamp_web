import React from 'react'
import SideBarMenu from '../../components/quizComponents/SideBarMenu'
import Container from '../../components/quizComponents/Container'
import CodeSideBar from '../../components/quizComponents/CodeSideBar'

function QuizPage() {
  return (
    <div className='flex justify-between m-4'>
    <SideBarMenu/>
    <Container/>
    <CodeSideBar/>

    </div>
  )
}

export default QuizPage