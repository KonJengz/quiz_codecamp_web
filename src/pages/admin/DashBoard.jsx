import React from 'react'
import DashBoardContainer from '../../components/dashBoardComponents/DashBoardContainer'
import SideBar from '../../components/dashBoardComponents/SideBar'

function DashBoard() {
  return (
    
    <div className='flex gap-2'>
      <SideBar/>
      <DashBoardContainer/>
    </div>
  )
}

export default DashBoard