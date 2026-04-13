"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { Globe, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#2a2a2a] text-[#cccccc] text-[10px] font-bold uppercase tracking-widest border-b border-white/5 relative z-50">
      <div className="flex items-center justify-between px-4 h-[52px]">
        
        <div className="flex items-center h-full">
          <button 
            className="lg:hidden mr-4 text-white hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="pr-6 hover:opacity-80 transition-opacity">
            <Image 
              src="/image 2.png" 
              alt="Epic Games Logo"
              width={32} 
              height={32}
              className="object-contain filter brightness-0 invert"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <div className="hidden lg:flex items-center h-full space-x-5">
            <Link 
              href="/" 
              className="relative h-full flex items-center text-white px-2 hover:text-white transition-colors"
            >
              STORE
              <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#0078f2]"></span>
            </Link>
            
            <Link href="/faq" className="hover:text-white transition-colors px-2">
              FAQ
            </Link>
            
            <Link href="/help" className="hover:text-white transition-colors px-2">
              HELP
            </Link>
            
            <Link href="/unreal" className="hover:text-white transition-colors px-2">
              UNREAL ENGINE
            </Link>
          </div>
        </div>

        <div className="flex items-center h-full">
          <div className="flex items-center space-x-4 md:space-x-6 px-4 md:px-6 h-full border-r border-white/10">
            <button className="hover:text-white transition-colors flex items-center">
              <Globe size={18} strokeWidth={2} />
            </button>
            
            <button className="flex items-center space-x-3 hover:text-white transition-colors">
              <User size={20} strokeWidth={2} />
              <span className="hidden sm:inline lg:inline">SIGN IN</span>
            </button>
          </div>
          
          <button className="bg-[#0078f2] hover:bg-[#006bd8] text-white px-4 md:px-8 h-full font-bold transition-all duration-200 text-[10px] md:text-sm">
            DOWNLOAD
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-[52px] left-0 w-full bg-[#2a2a2a] border-b border-white/10 flex flex-col py-4 px-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <Link 
            href="/" 
            className="text-white py-2 border-b border-white/5"
            onClick={() => setIsMenuOpen(false)}
          >
            STORE
          </Link>
          <Link 
            href="/faq" 
            className="hover:text-white py-2 border-b border-white/5"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            href="/help" 
            className="hover:text-white py-2 border-b border-white/5"
            onClick={() => setIsMenuOpen(false)}
          >
            HELP
          </Link>
          <Link 
            href="/unreal" 
            className="hover:text-white py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            UNREAL ENGINE
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
