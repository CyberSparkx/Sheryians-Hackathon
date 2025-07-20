import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Youtube, Instagram, Music } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PrimeFooter = () => {
  const containerRef = useRef(null);
  const hashtagRef = useRef(null);
  const canRef = useRef(null);
  const handRef = useRef(null);
  const socialIconsRef = useRef([]);
  const footerLinksRef = useRef([]);
  const emailSectionRef = useRef(null);
  const liquidRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const hashtag = hashtagRef.current;
    const can = canRef.current;
    const hand = handRef.current;
    const socialIcons = socialIconsRef.current;
    const footerLinks = footerLinksRef.current;
    const emailSection = emailSectionRef.current;
    const liquid = liquidRef.current;

    gsap.set(hashtag, { opacity: 0, y: 50 });
    gsap.set(can, { opacity: 0, scale: 0.8, rotation: -15 });
    gsap.set(hand, { opacity: 0, x: 100, rotation: 15 });
    gsap.set(socialIcons, { opacity: 0, scale: 0, rotation: 180 });
    gsap.set(footerLinks, { opacity: 0, y: 30 });
    gsap.set(emailSection, { opacity: 0, x: 50 });
    gsap.set(liquid, { scaleY: 0, transformOrigin: "bottom center" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(hashtag, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .to(can, { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)" }, "-=0.5")
      .to(liquid, { scaleY: 1, duration: 0.8, ease: "power2.out" }, "-=0.8")
      .to(hand, { opacity: 1, x: 0, rotation: 0, duration: 1, ease: "power2.out" }, "-=0.6")
      .to(socialIcons, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
      }, "-=0.4")
      .to(footerLinks, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      }, "-=0.6")
      .to(emailSection, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

    socialIcons.forEach((icon, index) => {
      gsap.to(icon, {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.3,
      });
    });

    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { scale: 1.2, duration: 0.3, ease: "back.out(1.7)" });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addSocialIconRef = (el) => {
    if (el && !socialIconsRef.current.includes(el)) {
      socialIconsRef.current.push(el);
    }
  };

  const addFooterLinkRef = (el) => {
    if (el && !footerLinksRef.current.includes(el)) {
      footerLinksRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <footer ref={containerRef} className="relative min-h-screen bg-gray-900 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 ref={hashtagRef} className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tight">
                #PRIME ENERGY DRINK
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  {["SPYLT Flavors", "Chug Club", "Student Marketing", "Dairy Dealers"].map((text, i) => (
                    <div key={i} ref={addFooterLinkRef} className="text-white hover:text-orange-400 cursor-pointer text-lg">
                      {text}
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {["Company", "Contacts", "Tasty Talk"].map((text, i) => (
                    <div key={i} ref={addFooterLinkRef} className="text-white hover:text-orange-400 cursor-pointer text-lg">
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center relative">
                <div ref={liquidRef} className="absolute top-12 left-1/2 transform -translate-x-1/2 w-3 h-24 z-10" />

                <div className="absolute -left-16 top-8 space-y-6">
                  {[Youtube, Instagram, Music].map((Icon, i) => (
                    <div
                      key={i}
                      ref={addSocialIconRef}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                    >
                      <Icon className={`w-6 h-6 ${Icon === Youtube ? "text-red-600" : Icon === Instagram ? "text-pink-600" : "text-black"}`} />
                    </div>
                  ))}
                </div>

                <div ref={canRef} className="relative w-[100vw] h-[80vh] lg:w-[50vw] lg:h-[50vh] mx-auto">
                  <img src="Bottles-png/png1.png" alt="Prime Can" className="w-full h-full object-contain" />
                </div>
              </div>

              <div ref={emailSectionRef} className="space-y-6">
                <p className="text-white text-lg leading-relaxed">
                  Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!
                </p>
                <div className="flex items-center space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-b-2 border-gray-600 focus:border-orange-400 text-white placeholder-gray-400 py-3 px-0 outline-none transition-colors text-lg"
                  />
                  <button className="text-white hover:text-orange-400 transition-colors p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All rights reserved */}
        <div className="relative z-10 text-center text-sm text-gray-400 mt-16 mb-6">
          © {new Date().getFullYear()} Prime Energy Drink. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PrimeFooter;
