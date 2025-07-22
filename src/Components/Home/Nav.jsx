import { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import logo from '/Bottles-png/logo (1).png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const navRef = useRef();
  const container = useRef();

  const lastScroll = useRef(0);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 50) {
        // Scrolling down
        gsap.to(navRef.current, {
          y: '-100%',
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        // Scrolling up
        gsap.to(navRef.current, {
          y: '0%',
          duration: 0.4,
          ease: 'power2.out',
        });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    if (menuOpen) {
      gsap.set(menuRef.current, { display: 'flex' });
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.menu-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
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

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-[100] p-6 flex items-center justify-between">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-10 w-auto" />

      {/* Hamburger - now shown on all screens */}
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
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold space-y-6 text-brown-800 mt-10"
          >
            <Link to="/" className="menu-item" onClick={handleLinkClick}>HOME</Link><br />
            <Link to="/products" className="menu-item" onClick={handleLinkClick}>PRODUCTS</Link><br />
            <Link to="/about" className="menu-item" onClick={handleLinkClick}>ABOUT US</Link><br />
            <Link to="/reviews" className="menu-item" onClick={handleLinkClick}>REVIEW PAGE</Link><br />
            <Link to="/profile" className="menu-item" onClick={handleLinkClick}>PROFILE</Link><br />
            <Link to="/contact" className="menu-item" onClick={handleLinkClick}>CONTACTS</Link><br />
            <Link to="/login" className="menu-item" onClick={handleLinkClick}>LOGIN</Link><br />
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
