'use client';
import LogoWhite from '/public/image/logo-white.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full bg-green-900 text-white pt-12 pb-4 mt-16">
    {/* Mobile */}
    <div className="block md:hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-around gap-2 md:gap-12 px-4 md:px-8">
        {/* Mobile: 3 columns, logo & social at bottom */}
        <div className="flex flex-row md:flex-row w-full">
          <div className="flex flex-col gap-2 text-[0.75rem] mb-8 md:mb-0 flex-1 order-1 md:order-none">
            <h4 className="font-bold text-lg mb-2">Account</h4>
            <span>My Account</span>
            <span>Login / Register</span>
            <span>Cart</span>
            <span>Wishlist</span>
            <span>Shop</span>
          </div>
          <div className="flex flex-col gap-2 text-[0.75rem] mb-8 md:mb-0 flex-1 order-2 md:order-none">
            <h4 className="font-bold text-lg mb-2">Quick Link</h4>
            <span>Privacy Policy</span>
            <span>Terms Of Use</span>
            <span>FAQ</span>
            <span>Contact</span>
          </div>
          <div className="flex flex-col gap-2 text-[0.75rem] mb-8 md:mb-0 flex-1 order-3 md:order-none">
            <h4 className="font-bold text-lg mb-2">Support</h4>
            <span>Malang, Jawa Timur, Indonesia</span>
            <span>abeliaplant@gmail.com</span>
            <span>0895-3665-70662</span>
          </div>
        </div>
        {/* Logo & Social: mobile only at bottom, desktop tetap di kiri */}
        <div className="flex flex-col items-center mt-8 md:mt-0 md:items-start md:justify-start flex-1 order-4 md:order-none md:mb-0">
          <div className="w-fit h-full flex items-center flex-col justify-between">
            <img
              src={LogoWhite}
              alt="Abelia Logo"
              width={120}
              height={40}
              className="mb-6"
            />
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-900 hover:bg-green-100"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-900 hover:bg-green-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-900 hover:bg-green-100"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-900 hover:bg-green-100"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/80">
        &copy; Copyright Abelia 2025. All right reserved
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          footer > div {
            flex-direction: column !important;
          }
          footer > div > div {
            align-items: flex-start !important;
            text-align: left !important;
          }
          footer .order-4 {
            align-items: center !important;
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </div>
    {/* Desktop */}
    <div className="hidden md:block">
      <div className="max-w-screen-2xl mx-auto flex flex-row justify-between items-end gap-16 px-8">
        {/* Logo & Social */}
        <div className="flex flex-col items-start justify-around h-full flex-1 min-w-[220px]">
          <div className='flex flex-col items-center h-full justify-between'>
            <img
              src={LogoWhite}
              alt="Abelia Logo"
              width={140}
              height={48}
              className="mb-8"
            />
            <div className="flex gap-6 mb-8">
              <a
                href="#"
                className="w-8 h-8 bg-transparent border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-900 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-transparent border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-900 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-transparent border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-900 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-transparent border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-900 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-10'>
          {/* Support */}
          <div className="flex flex-col gap-2 flex-1 min-w-[180px]">
            <h4 className="font-bold text-lg mb-2">Support</h4>
            <span>Malang, Jawa Timur, Indonesia</span>
            <span>abeliaplant@gmail.com</span>
            <span>0895-3665-70662</span>
          </div>
          {/* Account */}
          <div className="flex flex-col gap-2 flex-1 min-w-[180px]">
            <h4 className="font-bold text-lg mb-2">Account</h4>
            <span>My Account</span>
            <span>Login / Register</span>
            <span>Cart</span>
            <span>Wishlist</span>
            <span>Shop</span>
          </div>
          {/* Quick Link */}
          <div className="flex flex-col gap-2 flex-1 min-w-[180px]">
            <h4 className="font-bold text-lg mb-2">Quick Link</h4>
            <span>Privacy Policy</span>
            <span>Terms Of Use</span>
            <span>FAQ</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/80">
        &copy; Copyright Abelia 2025. All right reserved
      </div>
    </div>
  </footer>
);

export default Footer;
