import React, { useRef, useEffect } from 'react';

const Product = ({ canImg, bgImage, title }) => {
  const containerRef = useRef(null);
  const canRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const can = canRef.current;

    const handleMouseMove = (e) => {
      const { width, height, left, top } = container.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;

      const maxTranslate = 20; // max px move
      const moveX = -(x / (width / 2)) * maxTranslate;
      const moveY = -(y / (height / 2)) * maxTranslate;

      can.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const resetMove = () => {
      can.style.transform = `translate(0px, 0px)`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', resetMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', resetMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[60vw] h-[70vh] rounded-3xl flex items-center justify-center bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="w-full h-full bg-cover bg-center rounded-3xl shadow-lg absolute z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Main Can Image */}
      <img
        ref={canRef}
        src={canImg}
        alt="can"
        className="absolute w-130 z-30 drop-shadow-2xl transition-transform duration-300 ease-out"
      />

      {/* Title */}
      <div className="absolute bottom-[2vh] text-red-400 text-3xl font-bold z-30 tracking-wide">
        {title}
      </div>
    </div>
  );
};

export default Product;
