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
        // Scroll ke bawah -> Navbar hilang dan tutup menu di mobile
        setVisible(false);
        setMobileMenuOpen(false);
      } else {
        // Scroll ke atas -> Navbar muncul kembali
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
      <div className='menu-background' onClick={toggleMobileMenu}></div>
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
              className="w-48 md:w-80"
            />
          </Link>
        </div>
        <div className={`menu md:flex gap-10 text-[#06246C] ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className={`font-bold flex justify-end ${isMobileMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMobileMenu}>
            X
          </div>
          <Link href="/" className="hover:underline nav-text-link">
            <div>
              Home
            </div>
          </Link>          
          <Link href="/product" className="hover:underline nav-text-link">
            <div>
              Produk
            </div>
          </Link>
          <Link href="/tentang-kami" className="hover:underline nav-text-link">
            <div>
              Tentang Kami
            </div>
          </Link>
          <Link href="/daftar-distributor" className="hover:underline nav-text-link">
            <div>
              Daftar Distributor
            </div>
          </Link>
        </div>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <img className='w-4 h-4' src="/assets/navbar-menu.png" alt="Navbar Menu" />
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
          .menu-background {
            display: ${isMobileMenuOpen ? 'block' : 'none'};
            position: absolute;
            top: 0;
            left: 0;
            background: #00000070;
            width: 100%;
            height:100vh;
            z-index:-1;
          }
          .menu {
            position: absolute;
            transform: ${isMobileMenuOpen ? 'translate(-100vw,0px)' : 'translate(0px,0px)'};
            top: 0;
            right: -100%;
            background: white;
            width: auto;
            height:120vh;
            padding: 40px 20px;
            text-align: start;
            box-shadow: 0px 15px 14px 0px #56565660;
            z-index:100;
            transition: all 0.51s ;
          }
          .mobile-menu-button {
            display: flex;
            justify-content: center;
            align-items:center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
