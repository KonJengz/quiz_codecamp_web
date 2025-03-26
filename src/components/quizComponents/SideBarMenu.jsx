import React from 'react'

function SideBarMenu() {
    const topic = ["concat", "searchProduct", "twosum", "concat string", "sorting"]
    return (
        <div className='flex flex-col flex-1/10 bg-red-50 min-h-screen rounded-xl m-2'>
            {
                topic.map((el) => {
                    return <div className='m-4'>
                        <button className='hover:underline cursor-pointer text-purple-600'>
                            {el}
                        </button>

                    </div>
                })
            }

        </div>
    )
}

export default SideBarMenu