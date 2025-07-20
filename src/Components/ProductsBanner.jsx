import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductsBanner = () => {
  const sectionRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-[60vw] h-[70vh]  flex items-center justify-center"
    >
      <div ref={textRef} className="text-center leading-tight text-6xl font-bold text-[#42210b] relative">
        <div className="z-10">OUR PRODUCTS</div>
        <div className="relative z-20 inline-block">
          <span className="absolute inset-0 bg-[#b46c2c] -rotate-2 px-4 py-2 -z-10" />
          <span className="text-[#fcebdd]">WITH LOT OF</span>
        </div>
        <div className="z-10">DELICIOUS FLAVORS</div>
      </div>
    </div>
  );
};

export default ProductsBanner;
