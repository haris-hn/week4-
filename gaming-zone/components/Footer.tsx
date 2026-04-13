"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121212] text-gray-400 py-12 px-6 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
       

       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 border-b border-white/5 pb-12">
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Resources
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Creator Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  published on Epic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Profession
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Company
                </a>
              </li>
            </ul>
          </div>

          <div className="md:pt-8 flex flex-col">
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Fan Work Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  User Exp Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  user Liscence
                </a>
              </li>
            </ul>
          </div>

          <div className="md:pt-8 flex flex-col">
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Online Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Epic Newsroom
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:pt-8 flex flex-col">
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Battle Breakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Fortnite
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Infinity Blade
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:pt-8 flex flex-col">
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Robo Recall
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shadow Complex
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Unreal Tournament
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Text */}
        <div className="max-w-3xl mb-10 text-center md:text-left">
          <p className="text-[10px] md:text-[11px] leading-relaxed text-gray-500">
            © 2026, Epic Games, Inc. All rights reserved. Epic, Epic Games, Epic
            Games logo, Fortnite, Fortnite logo, Unreal, Unreal Engine, Unreal
            Engine logo, Unreal Tournament and the Unreal Tournament logo are
            trademarks or registered trademarks of Epic Games, Inc. in the
            United States of America and elsewhere. Other brand or product names
            are trademarks of their respective owners. Transactions outside the
            United States are handled through Epic Games International, S.à
            r.l..
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center space-y-8 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-[10px] md:text-xs text-gray-400">
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Store Refund Policy
            </a>
          </div>

          <div className="flex items-center">
            <Image
              src="/image 2.png"
              alt="Epic Logo"
              width={32}
              height={32}
              className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
