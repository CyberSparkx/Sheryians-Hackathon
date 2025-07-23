import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const splitWord = (word) =>
  word.split("").map((char, i) => (
    <span
      key={i}
      className="letter inline-block text-[#652c1f] transition-colors duration-300"
    >
      {char}
    </span>
  ));

const ScrollTextFade = () => {
useGSAP(() => {
  gsap.to(".letter", {
    color: "#fae5da",
    y: -5,
    duration: 0.8,
    ease: "power2.out",
    stagger: {
      each: 0.05,
      from: "start",
    },
    scrollTrigger: {
      trigger: ".container2",
      start: "top 0%",
      end: "bottom 40%",
      scrub: true,
      pin:true
    },
  });
},[]);


  return (
    <div className="container2 min-h-screen w-full relative z-[14] flex items-center justify-center bg-[#7d3b2b] px-4 py-20">
      <div className="text-center w-[70vw] md:w-[50vw] text-4xl md:text-6xl font-extrabold leading-tight space-y-2">
        <span className="mr-3">{splitWord("UNLEASH")}</span>
        <span className="mr-3">{splitWord("UNSTOPPABLE")}</span> <br />
        <span className="mr-3">{splitWord("ENERGY")}</span>
        <span className="mr-3">{splitWord("AND")}</span><br />

        <span className="fuel-up inline-block bg-[#eca353] px-4 py-1 rotate-2 mt-4">
          <h2 className="text-4xl md:text-6xl font-black text-[#752e1e] tracking-wide">
            POWER
          </h2>
        </span><br />

        <span className="mr-3">{splitWord("THROUGH")}</span>
        <span className="mr-3">{splitWord("EVERY")}</span>
        <span className="mr-3">{splitWord("SIP")}</span>
        <span className="mr-3">{splitWord("OF")}</span><br />
        <span className="mr-3">{splitWord("PRIME.")}</span>
      </div>
    </div>
  );
};

export default ScrollTextFade;
