import React from 'react'
import IconButton from './Button'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='w-full h-3/4 bg-[#181818] text-[#fffdf6] text-start p-16 py-36 flex flex-col gap-10'>
      <h1 className='text-9xl font-black'>Let's get in touch!</h1>
      <p className='text-2xl font-normal max-w-[500px]'>I'd love to hear from you and explore collaboration, answer your questions, or simply chat.</p>
      <div className="buttonWrapper flex gap-7">
        <IconButton icon={ FaLinkedin } link="https://www.linkedin.com" size="w-14 h-14" />
        <IconButton icon={ FaInstagram } link="https://www.instagram.com" size="w-14 h-14" />
        <IconButton email="hello@juna.se" link="mailto:hello@juna.se" size="w-60 h-14" />
      </div>
      <hr />
    </div>
  )
}

export default Footer
