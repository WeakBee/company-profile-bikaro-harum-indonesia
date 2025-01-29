'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [isScrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname(); // Get the current URL path

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.scrollY > 650) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY) {
        // Scroll ke bawah
        setVisible(false);
      } else {
        // Scroll ke atas
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Determine navbar background based on pathname
  const navbarBackground =
    pathname === '/' // Check if the user is on the home page
      ? isScrolled
        ? 'bg-white/50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'
        : 'bg-transparent'
      : 'bg-white shadow-md';

  return (
    <nav
      className={`navbar fixed left-0 top-0 w-full py-4 z-50 transition-all duration-300 ${
        navbarBackground
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-5 xl:px-20 flex justify-between items-center">
        {/* Gambar Logo */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/logo-bikaro-harum-indonesia.png"
              alt="Logo Bikaro Harum Indonesia"
              width={1280}
              height={80}
              priority
              className="w-80"
            />
          </Link>
        </div>
        <div className={`menu flex gap-10 ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/product" className="hover:underline">
            Produk
          </Link>
          <Link href="/" className="hover:underline">
            Tentang Kami
          </Link>
          <Link href="/" className="hover:underline">
            Daftar Distributor
          </Link>
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
