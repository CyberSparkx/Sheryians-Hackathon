import React, { useRef, useEffect } from 'react';

const loadGSAPScripts = () => {
  return new Promise((resolve) => {
    if (window.gsap && window.ScrollTrigger) {
      resolve();
      return;
    }

    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js';
    gsapScript.onload = () => {
      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js';
      scrollTriggerScript.onload = resolve;
      document.body.appendChild(scrollTriggerScript);
    };
    document.body.appendChild(gsapScript);
  });
};

const App = () => {
  const containerRef = useRef(null);
  const productsRef = useRef([]);
  const nutritionStatsRef = useRef([]);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    loadGSAPScripts().then(() => {
      if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
        console.error("GSAP or ScrollTrigger not loaded correctly.");
        return;
      }
      window.gsap.registerPlugin(window.ScrollTrigger);

      const container = containerRef.current;
      const products = productsRef.current;
      const nutritionStats = nutritionStatsRef.current;
      const ctaButton = ctaButtonRef.current;

      window.gsap.set(products, {
        opacity: 0,
        y: 50,
      });

      window.gsap.set(nutritionStats, {
        opacity: 0,
        x: 50,
      });

      window.gsap.set(ctaButton, {
        opacity: 0,
        y: 50,
      });

      const tl = window.gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        }
      });

      tl.to(products, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
      })
        .to(nutritionStats, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        }, "-=0.5")
        .to(ctaButton, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        }, "-=0.3");

      return () => {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });
  }, []);

  const addNutritionRef = (el) => {
    if (el && !nutritionStatsRef.current.includes(el)) {
      nutritionStatsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <section
        ref={containerRef}
        className="relative min-h-screen bg-white overflow-hidden py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-black mb-12">
          PRIME STICKS
        </h1>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <img src="/Bottles-png/Prime-Sticks.jpg" alt="Prime Sticks" />

            <div className="flex flex-col justify-center items-center lg:items-start py-8">
              <div className="grid grid-cols-2 gap-x-8 gap-y-12 w-full max-w-md">

                <div ref={addNutritionRef} className="text-center  lg:text-left relative pr-4 border-r border-black">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-none">
                    1085<span className="text-2xl md:text-3xl">+ mg</span>
                  </div>
                  <div className="text-lg md:text-xl font-light text-gray-700 italic tracking-wider">
                    ELECTROLYTES
                  </div>
                  <div className="absolute bottom-[-24px] right-0 w-full h-0.5 bg-black transform translate-x-1/2"></div>
                </div>

                <div ref={addNutritionRef} className="text-center lg:text-left relative pl-4">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-none">
                    ZERO
                  </div>
                  <div className="text-lg md:text-xl font-light text-gray-700 italic tracking-wider">
                    SUGAR
                  </div>
                  <div className="absolute bottom-[-24px] left-0 w-full h-0.5 bg-black transform -translate-x-1/2"></div>
                </div>

                <div ref={addNutritionRef} className="text-center pr-30 lg:text-left relative  border-r border-black pt-12">
                  <div className="text-3xl transform lg:-translate-x-6 md:text-4xl  lg:text-5xl font-black text-gray-900 leading-none italic">
                    CAFFEINE
                  </div>
                  <div className="text-xl md:text-2xl font-light text-gray-700">
                    FREE
                  </div>
                </div>

                <div ref={addNutritionRef} className="text-center lg:text-left relative pl-4 pt-12">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 italic leading-none">
                    B<span className="text-xl md:text-2xl">₆</span>
                  </div>
                  <div className="text-lg md:text-xl font-light text-gray-700">
                    B VITAMINS +
                  </div>
                  <div className="text-lg md:text-xl font-light text-gray-700">
                    MINERALS
                  </div>
                </div>
              </div>

              <div ref={ctaButtonRef} className="pt-12 w-full max-w-xs mx-auto lg:mx-0">
                <button className="w-full bg-black text-white px-8 py-4 font-bold text-lg tracking-wider hover:bg-gray-800 transition-colors duration-300">
                  REHYDRATE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full h-screen flex items-center justify-center bg-white'>
        <img src="/Bottles-png/Prime Ice.png" className='w-[80vw]' />
      </section>
      <section className='w-full h-screen flex items-center justify-center bg-white'>
        <img src="/Bottles-png/Cans.png" />
      </section>
    </div>
  );
};

export default App;
