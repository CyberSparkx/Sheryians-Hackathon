import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

export default function LoadingScreen() {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const barRef = useRef(null);
  const [hide, setHide] = useState(false);
  const location = useLocation(); // 👈 route change detection

  useEffect(() => {
    setHide(false); // 👈 reset loading screen on route change
  }, [location.pathname]);

  useGSAP(() => {
    if (hide) return;

    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.6 },
    });

    tl.fromTo(
      lettersRef.current,
      { y: 100, opacity: 0, rotateX: 90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.1,
      }
    )
      .to(
        barRef.current,
        {
          width: "100%",
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        onComplete: () => setHide(true),
      });
  }, [hide]); // rerun animation on reset

  if (hide) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[url('/bgs/product-bg3.svg')] bg-cover bg-center backdrop-blur-3xl flex flex-col items-center justify-center text-white"
    >
      <div className="flex text-6xl md:text-7xl font-extrabold tracking-widest mb-10">
        {"PRIME".split("").map((char, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className="mx-1 text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-white animate-shine"
          >
            {char}
          </span>
        ))}
      </div>

      <div className="w-40 h-1.5 bg-zinc-800 rounded-full overflow-hidden shadow-inner">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 transition-all duration-1000 rounded-full shadow-lg"
        ></div>
      </div>
    </div>
  );
}
