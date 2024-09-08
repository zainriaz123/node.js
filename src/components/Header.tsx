import React from 'react';
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex gap-4 bg-green-300' >
      <Link href="\">Home</Link>
      <Link href="\about">about</Link>
      <Link href="\address">address</Link>
      <Link href="\contact">contact</Link>
    </div>
  )
}

export default Header
