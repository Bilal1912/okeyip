"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white z-500 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-6xl font-bold font-poppins text-[rgb(0,48,91)]">OKEY IP</h1>

        {/* Desktop Navigation & Tab */}
        <div className="hidden md:flex items-center space-x-5">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
          <NavLink href="/services">SERVICES</NavLink>
          <NavLink href="/team">TEAM</NavLink>
          <NavLink href="/news">NEWS AND PUBLICATIONS</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </div>

        

       {/* Mobile Menu Button */}
       <button
          className="md:hidden relative w-8 h-6 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Mobile menu"
        >
          <span className={`absolute left-0 w-full h-0.5 bg-[rgb(0,48,91)] transition-all duration-300 ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
          <span className={`absolute left-0 w-full h-0.5 bg-[rgb(0,48,91)] transition-all duration-300 ${isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-3'}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink href="/" onClick={() => setIsOpen(false)}>HOME</MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>ABOUT US</MobileNavLink>
          <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>SERVICES</MobileNavLink>
          <MobileNavLink href="/team" onClick={() => setIsOpen(false)}>OUR TEAM</MobileNavLink>
          <MobileNavLink href="/news" onClick={() => setIsOpen(false)}>NEWS AND PUBLICATIONS</MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>CONTACT US</MobileNavLink>
        </div>
      </div>

    </nav>
  )};


const NavLink = ({ href, children }) => (
  <Link href={href} className="font-poppins text-[rgb(0,48,91)] hover:text-blue-800 text-base">
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link 
    href={href} 
    onClick={onClick}
    className="font-poppins text-[rgb(0,48,91)] hover:text-blue-800 text-base py-2"
  >
    {children}
  </Link>
);


