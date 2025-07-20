import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShelfStableComponent = () => {
  const containerRef = useRef(null);
  const shelfStableRef = useRef(null);
  const proteinCaffeineRef = useRef(null);
  const infinitelyRef = useRef(null);
  const lactoseFreeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for the entire animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Initial states - invisible and scaled down
      gsap.set([shelfStableRef.current, proteinCaffeineRef.current, infinitelyRef.current, lactoseFreeRef.current], {
        opacity: 0,
        scale: 0.8,
        y: 50
      });

      // Animate each element with staggered timing and weight effect
      tl.to(shelfStableRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        fontWeight: 900
      })
      .to(proteinCaffeineRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        fontWeight: 900
      }, "-=0.5")
      .to(infinitelyRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        fontWeight: 900
      }, "-=0.5")
      .to(lactoseFreeRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        fontWeight: 900
      }, "-=0.5");

      // Add a subtle floating animation after the main animation
      gsap.to([shelfStableRef.current, proteinCaffeineRef.current, infinitelyRef.current, lactoseFreeRef.current], {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
        stagger: 0.2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div 
        ref={containerRef}
        className="relative flex flex-col items-center space-y-4 transform-gpu"
      >
        {/* SHELF STABLE */}
        <div 
          ref={shelfStableRef}
          className="bg-orange-400 px-12 py-6 transform -rotate-2 shadow-2xl"
          style={{
            clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)'
          }}
        >
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-wider">
            SHELF STABLE
          </h2>
        </div>

        {/* PROTEIN + CAFFEINE */}
        <div 
          ref={proteinCaffeineRef}
          className="bg-gray-100 px-12 py-6 transform rotate-1 shadow-2xl"
          style={{
            clipPath: 'polygon(0% 0%, 98% 0%, 100% 100%, 2% 100%)'
          }}
        >
          <h2 className="text-gray-900 text-4xl md:text-6xl font-black tracking-wider">
            PROTEIN + CAFFEINE
          </h2>
        </div>

        {/* INFINITELY RECYCLABLE */}
        <div 
          ref={infinitelyRef}
          className="bg-red-700 px-12 py-6 transform -rotate-1 shadow-2xl"
          style={{
            clipPath: 'polygon(1% 0%, 99% 0%, 98% 100%, 2% 100%)'
          }}
        >
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-wider">
            INFINITELY RECYCLABLE
          </h2>
        </div>

        {/* LACTOSE FREE */}
        <div 
          ref={lactoseFreeRef}
          className="bg-yellow-500 px-12 py-6 transform rotate-2 shadow-2xl"
          style={{
            clipPath: 'polygon(0% 0%, 98% 0%, 100% 100%, 2% 100%)'
          }}
        >
          <h2 className="text-gray-900 text-4xl md:text-6xl font-black tracking-wider">
            LACTOSE FREE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ShelfStableComponent;