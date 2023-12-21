import React from 'react'

function Dates({invoiceNumber,invoiceDate,dueDate}) {
  return (
    <div className="mt-5 flex flex-col items-end">
        <ul>
          <li><span className='font-bold'>Invoicer number:</span>{invoiceNumber}</li>
          <li><span className='font-bold'>Invoice date:</span>{invoiceDate}</li>
          <li><span className='font-bold'>Due Date:</span>{dueDate}</li>
        </ul>
      </div>
  )
}

export default Dates