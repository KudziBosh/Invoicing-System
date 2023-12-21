import React from 'react'

function Footer({name,email,address, website,phone,bankName,bankAccount,invoiceNumber}) {
  return (
    <footer className='border-t'>
        <ul className="flex flex-wrap items-center justify-center gap-2">
        <li><span className='font-bold text-bold'>Your Name:</span> {name}</li>
          <li><span className='font-bold text-bold'>Your Name :</span>{email}</li>
          <li><span className='font-bold text-bold'>Phone Number</span> {phone}</li>
          <li><span className='font-bold text-bold'>Bank:</span>{bankName}</li>
          <li><span className='font-bold text-bold'>Invoice date:</span>{invoiceNumber}</li>
          <li><span className='font-bold text-bold'>Account number:</span>{bankAccount}</li>
          <li><span className='font-bold text-bold'>Website:</span><a href={website}>{website}</a></li>
        </ul>
      </footer>
  )
}

export default Footer 