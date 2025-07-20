import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RightAroundCorner = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const mapPinsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;
    const pins = mapPinsRef.current;

    // Set initial state
    gsap.set([title, subtitle, description, button], { opacity: 0, y: 50 });
    gsap.set(pins, { opacity: 0, scale: 0, rotation: 180 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "top 10%",
        scrub: true
      }
    });

    tl.to(title, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
      .to(subtitle, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .to(description, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(button, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
      .to(pins, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, "-=0.4");

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const addPinRef = (el) => {
    if (el && !mapPinsRef.current.includes(el)) {
      mapPinsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a799f357e5045354c1d4e9_map.svg')"
        }}
      >
        {/* Pins */}
        <div ref={addPinRef} className="absolute top-20 right-32 w-8 h-8 bg-orange-500 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2"></div>
        <div ref={addPinRef} className="absolute top-40 right-64 w-8 h-8 bg-orange-500 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2"></div>
        <div ref={addPinRef} className="absolute top-60 right-96 w-8 h-8 bg-orange-500 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-start min-h-screen px-10">
          <div className="max-w-2xl">
            <h1 ref={titleRef} className="text-6xl font-black text-white mb-4">
              RIGHT AROUND
            </h1>
            <div ref={subtitleRef} className="inline-block bg-yellow-400 px-6 py-2 mb-6 -skew-x-6">
              <h2 className="text-4xl font-black text-black skew-x-6">THE CORNER</h2>
            </div>
            <p ref={descriptionRef} className="text-white text-lg mb-8 max-w-md">
              Buy our drinks at your local store or get them delivered (to your door).
            </p>
            <button
              ref={buttonRef}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              FIND IN STORES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAroundCorner;
