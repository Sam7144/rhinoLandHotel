import Link from 'next/link'
import React from 'react'

function book() {
  return (
    <div className='bookk'>
        <div className="book__image"></div>
        <h1>to book call us on 0742337899 or contact us by email{" "}
        <Link href='/proposalEM' className='l-email'>email us</Link>
        </h1>
    </div>
  )
}

export default book