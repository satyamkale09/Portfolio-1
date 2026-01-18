import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full items-center flex  justify-end z-10 p-20'>
        <button className='bg-black  border-3 border-e-amber-50 text-xl text-white px-6 py-3 rounded-full hover:bg-zinc-800'>Hire me</button>
        <i className="ri-menu-3-line text-4xl ml-3"></i>
    </div>
  )
}

export default Header