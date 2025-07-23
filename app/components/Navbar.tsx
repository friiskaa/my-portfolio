'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {    
    setIsMounted(true);

    const handleScroll = () => {
        setActive(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  if (!isMounted) return null;

  return (
    <nav className={`w-full fixed z-50 top-0 left-0 transition-all duration-300 ${
        active ? 'bg-white shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-violet-700">
          PORTFOLIO
        </div>
        <ul className="hidden md:flex gap-10 items-center font-semibold text-lg uppercase text-violet-700">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
        </ul>

        <div className='md:hidden text-3xl text-violet-700 cursor-pointer' onClick={toggleMenu}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>

      {menuOpen && (
        <div className='md:hidden relative z-50 bg-white px-6 pt-2 pb-4 shadow-md text-violet-700 font-medium text-base'>
          <ul className='flex flex-col gap-4'>
            <li onClick={toggleMenu}>
              <Link href="#home">HOME</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="#about">ABOUT</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="#projects">PROJECTS</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href="#contact">CONTACT ME</Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar