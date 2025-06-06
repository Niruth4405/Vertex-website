import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d0b1f] to-[#251d78] text-white py-10">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
    <div className="mb-6 md:mb-0 text-3xl font-bold tracking-widest">
      <span className="font-mono">VΞRTX</span>
    </div>

    <nav class="flex space-x-10 text-lg font-medium">
      <a href="#" class="hover:text-gray-300">Home</a>
      <a href="#" class="hover:text-gray-300">About</a>
      <a href="#" class="hover:text-gray-300">Members</a>
      <a href="#" class="hover:text-gray-300">Contact</a>
    </nav>

    <div class="flex space-x-5 mt-6 md:mt-0">
      <a href="#" class="bg-white text-black p-3 rounded-full hover:bg-gray-200">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="bg-white text-black p-3 rounded-full hover:bg-gray-200">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="bg-white text-black p-3 rounded-full hover:bg-gray-200">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="bg-white text-black p-3 rounded-full hover:bg-gray-200">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>

  
  <div class="border-t border-gray-300 my-6"></div>

  
  <div class="text-center text-sm text-gray-300">
    Made with <span class="text-red-500"></span> by Shivansh
  </div>
</footer>
  )
}

export default Footer