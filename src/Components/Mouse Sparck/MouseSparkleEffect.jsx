import {  useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MouseSparkleEffect() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;

    const createBubble = (x, y) => {
      const bubble = document.createElement("div");
      bubble.className = "w-2 h-2 rounded-full bg-cyan-400 opacity-80 absolute pointer-events-none";
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;

      container.appendChild(bubble);

      gsap.to(bubble, {
        x: gsap.utils.random(-15, 15),
        y: gsap.utils.random(-30, -60),
        scale: gsap.utils.random(1, 1.8),
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        onComplete: () => {
          container.removeChild(bubble);
        },
      });
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        createBubble(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
    />
  );
}
