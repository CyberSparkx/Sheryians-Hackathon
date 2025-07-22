import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReviewVideos from './ReviewVideos';

gsap.registerPlugin(ScrollTrigger);

const ReviewSection = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(text1Ref.current, {
      x: '20%',
      duration: 1,
      ease: 'power3.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: '-30% bottom',
        end: 'bottom top',
        toggleActions: 'play none none none',
        scrub: true,
      },
    });

    gsap.to(text2Ref.current, {
      x: '5%',
      duration: 1,
      ease: 'power3.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play none none none',
        scrub: true,
      },
    });

    gsap.to(text3Ref.current, {
      x: '-10%',
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none none',
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden relative">
      {/* Pinned Section */}
      <ReviewVideos />

      {/* Headings Section */}
      <div className="bg-[#faeade] flex flex-col items-center justify-center w-full min-h-screen">
        <h1 ref={text1Ref} className="text-[15vw] w-[80vw] font-bold text-center">
          EVERYONE
        </h1>
        <h1 ref={text2Ref} className="text-[15vw] w-[80vw] font-bold text-center">
          WHAT'S
        </h1>
        <h1 ref={text3Ref} className="text-[15vw] w-[80vw] font-bold text-center">
          TALKING
        </h1>
      </div>

      {/* Background Image */}
      <img
        src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66a79692bac3e381538a3e53_melting%20bg.svg"
        alt="Melting Background"
        className="mb-20 w-full h-auto"
      />
    </div>
  );
};

export default ReviewSection;
