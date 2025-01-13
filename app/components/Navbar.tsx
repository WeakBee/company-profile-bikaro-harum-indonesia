'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar absolute left-0 top-0 w-full py-7 z-10">
      <div className="container mx-auto px-10 flex justify-between items-center">
        {/* Gambar Logo */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/logo-bikaro-harum-indonesia.png" // Path ke gambar di folder public
              alt="Logo Bikaro Harum Indonesia"
              width={1280} // Lebar gambar
              height={80} // Tinggi gambar
              priority
              className='w-80'
            />
          </Link>
        </div>
        <div className={`menu flex gap-10 ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/about">Produk</Link>
          <Link href="/services">Tentang Kami</Link>
          <Link href="/contact">Daftar Distributor</Link>
        </div>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <style jsx>{`
        .mobile-menu-button {
          display: none;
          background: none;
          color: white;
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
