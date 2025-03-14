import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar px-20 py-3 w-full h-16 text-xl text-[#181818] bg-[#fffdf6] flex justify-between items-center'>
      <div className=''>
        <Link href='/'>Juna Jakobsson</Link>
      </div>
      <div className=''>
        <ul className='flex items-center gap-9'>
          <li><Link href='/projects'>Projects</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
