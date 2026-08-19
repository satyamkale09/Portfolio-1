import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import SideBar from './SideBar'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [showResume, setShowResume] = useState(true)

  useEffect(() => {

    const scrollContainer = document.querySelector('main')

    const handleScroll = () => {
      if (scrollContainer) {
        setShowResume(scrollContainer.scrollTop < window.innerHeight * 0.8)
      }
    }

    scrollContainer?.addEventListener('scroll', handleScroll)

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <>
      <div className='absolute top-0 left-0 w-full flex justify-end items-center z-50 p-20'>

        {/* Resume Button */}
        {showResume && (
  <a
    href="https://drive.google.com/file/d/1RJkIrIYzMw87KSiTFyM18baBrko7htjx/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black border-2 border-amber-50 text-sm sm:text-base md:text-lg lg:text-xl text-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full hover:bg-zinc-800 transition-all duration-300 inline-block"
  >
    Resume
  </a>
)}

        {/* Menu - Always Visible */}
        <i
          onClick={() => setMenuOpen(true)}
          className="ri-menu-3-line text-4xl text-[#DDDDDD] ml-3 cursor-pointer"
        ></i>

      </div>

      <SideBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

    </>
  )
}

export default Header