import React from 'react'
import logImg from '../assets/1.jpg'

function Auth(props) {
  return (
    
        <div className='flex items-center p-10 w-full h-full'>

        <div className="grid grid-cols-1 sm:grid-cols-2   w-full font-thin bg-primary mx-auto  rounded-l-lg border bg-blue-50  dark:bg-gray-700 dark:text-gray-400">
      <div className="bg-white-800 flex flex-col justify-center p-2 ">
        <label className=" text-center text-2xl text-gray-700 font-bold dark:text-gray-400 ">
          {props.title}
        </label>
        {props.children}
      </div>
      <div className="bg-white-800 flex  justify-center ">
        
        
          <img className="w-full h-full rounded" src={logImg} alt="" />
        
      </div>
    </div>
        </div>
        
    
  )
}

export default Auth