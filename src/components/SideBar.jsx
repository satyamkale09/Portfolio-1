import React from 'react'

function SideBar({ menuOpen, setMenuOpen }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] sm:w-[450px] 
        bg-black z-50 p-10
        transition-transform duration-500 ease-in-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >

        {/* Close Button */}
        <div className="flex justify-end">
          <i
            onClick={() => setMenuOpen(false)}
            className="ri-close-line text-4xl text-[#DDDDDD] cursor-pointer"
          ></i>
        </div>

        {/* Menu Items */}
        <nav className="mt-20 flex flex-col gap-8">

          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-5xl text-[#DDDDDD] font-[anzo] hover:text-gray-400 transition-colors duration-300"
          >
            HOME
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-5xl text-[#DDDDDD] font-[anzo] hover:text-gray-400 transition-colors duration-300"
          >
            PROJECTS
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-5xl text-[#DDDDDD] font-[anzo] hover:text-gray-400 transition-colors duration-300"
          >
            ABOUT
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-5xl text-[#DDDDDD] font-[anzo] hover:text-gray-400 transition-colors duration-300"
          >
            CONTACT
          </a>

        </nav>

      </div>
    </>
  )
}

export default SideBar