import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const PageNotFound = () => {
  const containerRef = useRef();
  const floating1 = useRef();
  const floating2 = useRef();
  const floating3 = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1,delay: 2.5 }
    );

    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3, ease: 'power2.out' }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3, ease: 'power2.out' }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay: 3.2, ease: 'back.out(1.7)' }
    );

    gsap.to(floating1.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: 'sine.inOut',
    });

    gsap.to(floating2.current, {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: 'sine.inOut',
      delay: 0.5,
    });

    gsap.to(floating3.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 5,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[url('/bgs/products-bg1.svg')] bg-cover bg-center backdrop-blur-3xl flex items-center justify-center overflow-hidden text-white"
    >
      {/* Floating Emojis */}
      <div ref={floating1} className="absolute top-10 left-10 text-5xl select-none">🌙</div>
      <div ref={floating2} className="absolute top-32 right-20 text-4xl select-none">☁️</div>
      <div ref={floating3} className="absolute bottom-16 left-24 text-3xl select-none">⭐</div>

      {/* Main Content */}
      <div className="text-center px-6 z-10">
        <h1
          ref={titleRef}
          className="text-[8rem] leading-none font-extrabold drop-shadow-lg"
        >
          404
        </h1>
        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl font-semibold mb-8"
        >
          Oops! Page Not Found
        </p>
        <div ref={buttonRef}>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-white text-indigo-700 font-bold rounded-full hover:bg-gray-200 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
