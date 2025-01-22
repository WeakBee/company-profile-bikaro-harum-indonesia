'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Pantau scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed left-0 top-0 w-full py-4 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-5 xl:px-20 flex justify-between items-center">
        {/* Gambar Logo */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/logo-bikaro-harum-indonesia.png" // Path ke gambar di folder public
              alt="Logo Bikaro Harum Indonesia"
              width={1280} // Lebar gambar
              height={80} // Tinggi gambar
              priority
              className="w-80"
            />
          </Link>
        </div>
        <div className={`menu flex gap-10 ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" className='hover:underline'>Home</Link>
          <Link href="/" className='hover:underline'>Produk</Link>
          <Link href="/" className='hover:underline'>Tentang Kami</Link>
          <Link href="/" className='hover:underline'>Daftar Distributor</Link>
        </div>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <style jsx>{`
        .mobile-menu-button {
          display: none;
          background: none;
          color: black;
          border: none;
          font-size: 1rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .menu {
            display: ${isMobileMenuOpen ? 'block' : 'none'};
            position: absolute;
            top: 55px;
            left: 0;
            background: #444;
            width: 100%;
            padding: 10px 0;
            text-align: center;
          }
          .mobile-menu-button {
            display: block;
            background: black;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
