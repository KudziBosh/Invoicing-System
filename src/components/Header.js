import React from 'react'

function Header({handlePrint}) {
    
  return (
    <div className="flex flex-col">
        <div className="text-center">
        <div className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</div>
        </div>
        <ul className="flex flex-row gap-3 justify-between m-2 ">
          
          <li>
            <button  className='w-full bg-blue-200 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ' onClick={handlePrint}>Printer</button>
          </li>
          <li><button className='w-full bg-blue-200 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 '>Download</button></li>
          <li><button className='w-full bg-blue-200 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 '>Send</button></li>
        </ul>
      </div>
  )
}

export default Header