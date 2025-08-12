'use client';

import HeroBG from '/public/image/Hero BG.png';
import HeroBGMobile from '/public/image/hero-bg-mobile.png';
import LogoWhite from '/public/image/logo-white.png';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';

const Hero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section className="w-full h-[750px] aspect-square md:aspect-auto md:min-h-[1000px] flex items-end justify-center px-0 md:px-[8rem] relative overflow-hidden">
      {/* Background img + Overlay */}
      {/* Mobile background */}
      <div className="block md:hidden absolute top-0 left-0 w-full h-full z-0">
        <img
          src={HeroBGMobile}
          alt="Hero Background Mobile"
          style={{ objectFit: 'cover', zIndex: 0 }}
          className="w-full h-full object-cover pointer-events-none select-none"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      {/* Desktop background */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full z-0">
        <img
          src={HeroBG}
          alt="Hero Background"
          style={{ objectFit: 'cover', zIndex: 0 }}
          className="w-full h-full object-cover pointer-events-none select-none"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 pt-4 z-20 md:hidden">
        <button
          className="text-white text-3xl"
          onClick={() => setSidebarOpen(true)}
        >
          <HiMenu />
        </button>
        <div className="flex-1 flex justify-center">
          <img src={LogoWhite} alt="Abelia Logo" width={90} height={32} />
        </div>
        <button className="bg-white text-black rounded-full px-4 py-1 font-semibold text-sm">
          Login
        </button>
      </div>
      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <nav className="fixed top-0 left-0 h-full w-64 bg-white z-50 flex flex-col p-6 gap-6 animate-slide-in shadow-lg">
            <button
              className="self-end text-2xl mb-4"
              onClick={() => setSidebarOpen(false)}
            >
              &times;
            </button>
            <a
              href="#"
              className="text-lg font-semibold text-gray-800 hover:text-green-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-800 hover:text-green-900"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-800 hover:text-green-900"
            >
              About
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-800 hover:text-green-900"
            >
              Login
            </a>
          </nav>
          <style jsx>{`
            @keyframes slide-in {
              from {
                transform: translateX(-100%);
              }
              to {
                transform: translateX(0);
              }
            }
            .animate-slide-in {
              animation: slide-in 0.2s ease-out;
            }
          `}</style>
        </>
      )}
      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-start justify-center text-left px-4 pb-10 pt-32 md:pt-0 md:pb-32 md:px-0 md:w-full">
        <h1 className="text-white text-base md:text-[4rem] font-extrabold leading-tight mb-4 drop-shadow-lg md:w-full md:pb-6 ">
          Abelia is the Indonesian&apos;s <br /> Plant Marketplace.
        </h1>
        <p className="text-[#B9B9B9] text-base md:text-[1.25rem] mb-6 max-w-md md:max-w-screen-xl md:pb-12">
          From the moment Mike D&apos;Andrea discovered this plant in May of
          2021, he knew this large form.Monstera Sport would be special. 5
          generations later, the Monstera deliciosa variegata named
          &apos;Masterpiece&apos; has only gotten better with age. It&apos;s
          undeniably a wonderful variegated Monstera that doesn&apos;t quite
          f...
        </p>
        <button className="bg-white text-green-900 font-bold rounded-full px-7 py-2 transition hover:bg-green-100 shadow-md mb-6 pb:text-[2rem]">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
