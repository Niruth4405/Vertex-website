import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d0b1f] to-[#251d78] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Row: Logo, Nav, Social */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0 text-3xl font-bold tracking-widest">
            <span className="font-mono">VΞRTX</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center space-x-6 text-base font-medium mb-6 md:mb-0">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Members</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-6"></div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-300">
          Made with <span className="text-red-500">❤</span> by Shivansh
        </div>
      </div>
    </footer>

  )
}

export default Footer