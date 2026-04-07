// src/app/layout.tsx
import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import GameSlider from '@/components/GameSlider';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Added h-full and bg-[#121212] here to ensure the whole page is black */}
      <body className={`${poppins.className} bg-[#121212] text-white min-h-screen`}>
        <Navbar /> 
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}