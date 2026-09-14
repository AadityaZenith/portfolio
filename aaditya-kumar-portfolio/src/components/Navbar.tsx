import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between rounded-full bg-white px-6 py-3 shadow-md">
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">Aaditya kumar</span>
        <span className="h-2 w-2 rounded-full bg-red-500"></span>
      </div>
      <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#home" className="hover:text-black">Home</a>
        <a href="#about" className="hover:text-black">About</a>
        <a href="#education" className="hover:text-black">Education</a>
        <a href="#skills" className="hover:text-black">Skills</a>
        <a href="#experience" className="hover:text-black">Experience</a>
      </div>
      <button className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800">
        Contact me
      </button>
    </nav>
  );
};

export default Navbar;
