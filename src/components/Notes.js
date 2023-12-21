import React from 'react'

function Notes({notes}) {
  return (
    <div className='mb-5'>
        <p className='lg:w-1/2'>{notes}</p>
      </div>
  )
}

export default Notes