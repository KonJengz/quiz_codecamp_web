import React from 'react'

function SideBar() {

    return (
        <div className='min-h-screen bg-amber-500 flex flex-col m-7 rounded-2xl justify-between'>
            <div className='flex flex-col m-7 items-start'>
                <button className='hover:underline cursor-pointer text-purple-600'>Report</button>
                <button className='hover:underline cursor-pointer text-purple-600'>Quiz</button>
                <button className='hover:underline cursor-pointer text-purple-600'>Challenge</button>

            </div>
            <div className='flex items-start m-7'>
                <button className='hover:underline cursor-pointer text-purple-600'>Logout</button>

            </div>
        </div>
    )
}

export default SideBar