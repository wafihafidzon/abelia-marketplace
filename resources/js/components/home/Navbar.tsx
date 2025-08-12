"use client";

import { useState } from "react";
import Logo from "/public/image/logo.svg"

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center items-center py-[1rem] px-[1rem] md:px-0 bg-white shadow-sm h-[150px]">
      <div className="flex items-center w-full max-w-7xl">
        {/* Logo */}
        <div className="h-[12.5rem] flex items-center justify-center rounded-md font-bold mr-4">
          <img src={Logo} alt="Logo" />
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center w-[2.5rem] h-[2.5rem] ml-auto"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-[1.5rem] h-0.5 bg-black mb-1" />
          <span className="block w-[1.5rem] h-0.5 bg-black mb-1" />
          <span className="block w-[1.5rem] h-0.5 bg-black" />
        </button>
        {/* Menu (desktop) */}
        <ul className="hidden md:flex gap-8 text-lg font-medium ml-8">
          <li className="relative text-green-900">Home<div className="absolute left-0 right-0 h-0.5 bg-black opacity-50 mt-1" /></li>
          <li className="text-black">Shop</li>
          <li className="text-black">Explore</li>
          <li className="text-black">Gallery</li>
        </ul>
        {/* Search & Auth (desktop) */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <div className="flex items-center bg-[#F5F5F5] rounded px-[1rem] py-[0.5rem] w-[16rem]">
            <input className="bg-transparent outline-none flex-1 text-gray-700" placeholder="What are you looking for?" />
            <button className="w-[1.25rem] h-[1.25rem] ml-2">🔍</button>
          </div>
          <button className="border border-green-800 rounded-full px-[1.5rem] py-[0.5rem] text-green-800 font-medium">Sign Up/Login</button>
        </div>
      </div>
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setSidebarOpen(false)} />
          {/* Sidebar */}
          <aside className="relative w-[16rem] max-w-[80vw] bg-white h-full shadow-lg p-[1.5rem] flex flex-col z-50 animate-slideInLeft">
            <button
              className="absolute top-[1rem] right-[1rem] text-2xl"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <div className="mb-8 mt-2 w-[6rem] h-[2.5rem] bg-gray-200 flex items-center justify-center rounded-md font-bold text-lg">Logo</div>
            <ul className="flex flex-col gap-6 text-lg font-medium mt-8">
              <li className="text-green-900">Home</li>
              <li className="text-black">Shop</li>
              <li className="text-black">Explore</li>
              <li className="text-black">Gallery</li>
            </ul>
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center bg-[#F5F5F5] rounded px-[1rem] py-[0.5rem]">
                <input className="bg-transparent outline-none flex-1 text-gray-700" placeholder="What are you looking for?" />
                <span className="w-[1.25rem] h-[1.25rem] ml-2">🔍</span>
              </div>
              <button className="border border-green-800 rounded-full px-[1.5rem] py-[0.5rem] text-green-800 font-medium">Sign Up/Login</button>
            </div>
          </aside>
        </div>
      )}
      <style jsx>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.2s ease;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
