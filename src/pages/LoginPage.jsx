import React from 'react'

function LoginPage() {
    return (
        <div className='flex justify-center items-center min-h-screen w-full h-full gap-3'>
            <div className='text-5xl flex flex-col justify-center text-center flex-1/2 gap-2'>
                <h1>"</h1>
                <h1>WELCOME</h1>
                <h1>TO BEING</h1>
                <h1>DEVELOPER!</h1>
                <h1>"</h1>
            </div>
            <div className=' flex flex-col justify-between  gap-5 flex-1/2'>
                <div>
                    <h1>Let's Get Started</h1>
                </div>
                <div>
                    
                    <input type="text" placeholder='Username' className='border-b-2 border-y-teal-400'/>
                </div>
                <div>
                    
                    <input type="password" placeholder='Password' className='border-b-2 border-y-teal-400' />
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox"  />
                    <h1>I promise that I will try to do it by myself without using AI.</h1>
                </div>
            </div>
        </div>
    )
}

export default LoginPage