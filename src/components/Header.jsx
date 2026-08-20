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
        setShowResume(
          scrollContainer.scrollTop < window.innerHeight * 0.8
        )
      }
    }

    scrollContainer?.addEventListener('scroll', handleScroll)

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <>
      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-end items-center z-50 p-20 pointer-events-none">

        {/* Resume */}
          {showResume && (
  <a
    href="https://drive.google.com/file/d/1RJkIrIYzMw87KSiTFyM18baBrko7htjx/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className=" text-[#DDDDDD] text-2xl hover:text-[#CB2957] transition-colors duration-300 pointer-events-auto font-[anzo]"
  >
    RESUME<i className="ri-arrow-right-up-line ml-0"></i>
  </a>
)}

        {/* Menu */}
        <i
          onClick={() => setMenuOpen(true)}
          className="ri-menu-3-line text-4xl text-[#DDDDDD] ml-3 cursor-pointer hover:text-[#CB2957] transition-colors duration-300 pointer-events-auto"
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