import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from '../../public/Bottles-png/logo (1).png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const navRef = useRef();
   const container = useRef();

  useGSAP(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 1,
        ease: 'power3.out',
        display: 'flex',
      });
      
       gsap.from('.menu-item', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
    });
     
    } else {
      gsap.to(menuRef.current, {
        y: '-100%',
        duration: 0.6,
        ease: 'power3.in',
        onComplete: () => {
        gsap.set(menuRef.current, { display: 'none' });
        },
      });
    }
  }, [menuOpen]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50   p-8  flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-10 w-auto" />

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(true)} className="text-3xl">
        <FaBars />
      </button>

      {/* Signup */}
      <button className="hidden md:block bg-white border px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition">
        SIGN UP
      </button>

      {/* Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-xl flex-col md:flex-row hidden overflow-hidden"
      >
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <button onClick={() => setMenuOpen(false)} className="text-3xl">
              <FaTimes />
            </button>
          </div>

          <div
      ref={container}
      className="text-6xl font-extrabold space-y-6 text-brown-800"
    >
      <p className="menu-item">SHOP</p>
      <p className="menu-item">FIND IN STORES</p>
      <p className="menu-item">ABOUT US</p>
      <p className="menu-item">TASTY TALKS</p>
      <p className="menu-item">PROGRAMS</p>
      <p className="menu-item">CONTACTS</p>
    </div>

          <div className="flex gap-6 text-sm mt-10">
            <span>YouTube</span>
            <span>Instagram</span>
            <span>TikTok</span>
          </div>
        </div>

        <div className="hidden md:block flex-1 bg-cover bg-center"></div>
      </div>
    </nav>
  );
};

export default Nav;