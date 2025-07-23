import gsap from 'gsap';
import { useGSAP } from '@gsap/react';import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.registerPlugin(useGSAP);


// Main app component
export default function Hero3D() {
  
useGSAP(() => {
	// gsap code here...
	gsap.from('.bottles1', { 
    x: 460 ,
    y:200,
    scale:0.5,
    delay:2,
    duration:2
  });
	gsap.from('.bottles2', { 
    x: 460 ,
    y:-200,
    scale:0.5,
    delay:2,
    duration:2
  });
	gsap.from('.bottles3', { 
    rotate:30,
    scale:0.5,
    delay:2,
    duration:2
  });
	gsap.from('.bottles4', { 
    x: -60 ,
    rotate:-30,
    scale:0.5,
    delay:2,
    duration:2
  });
	gsap.from('.bottles5', { 
    x: -460 ,
    y:200,
    scale:0.5,
    delay:2,
    duration:2
  });
	gsap.from('.bottles6', { 
    x: -460 ,
    y:-200,
    scale:0.5,
    delay:2,
    duration:2
  });
	gsap.from('.bottles7', { 
    x: -460 ,
    rotate:-30,
    scale:0.5,
    delay:2,
    duration:2
  });
	gsap.from('.bottles8', { 
    x: 460 ,
    rotate:-30,
    scale:0.5,
    delay:2,
    duration:2
  });
gsap.to(".container1", {
  rotate: 15,
  y:500,
  scale: 0.7,
   ease: "power1.in",
  scrollTrigger: {
    trigger: ".container1",   
    start: "top top",          
    end: "bottom top", 
    scrub: true           
  },
});
}); //

  return (
    <div className="container1 w-full z-[13] h-screen bg-[#f9e6d8]">
      <div className="absolute flex flex-col justify-center items-center top-[50%] left-[8%] md:left-[15%]  lg:left-[31%]  z-12 backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-8 shadow-xl">
       <div className="backdrop-blur-md bg-white/20 border border-white/10 rounded-xl
 py-4 px-6 ">
         <h1 className="md:text-7xl  text-3xl font-bold  text-zinc-800">PRIME DRINK</h1>
       </div>
        <p className="md:text-3xl text-lg text-black font-bold opacity-75">MOST LOVED ENERGY DRINK
        </p>
      </div>

      {/* All images comes here */}


       <div className="absolute  w-full h-screen overflow-hidden bg-[url('/bgs/products-bg1.svg')] bg-cover bg-center">
    
      <img
        src="/Bottles-png/png.png"
        className="bottles1 absolute left-2 top-10 w-90 rotate-[-12deg]"
        alt="bottle-1"
      />
      <img
        src="/Bottles-png/png1.png"
        className="bottles2 absolute left-12 top-2/3 w-90 rotate-[-6deg]"
        alt="bottle-2"
      />
      
      {/* Main Left Bottle (almost center-left) */}
      <img
        src="/Bottles-png/png2.png"
        className="bottles3 absolute left-[0%] md:left-[13%] lg:left-[30%] top-[20%]  z-9 w-150  "
        alt="bottle-left"
      />


      <img
        src="/Bottles-png/png4.png"
        className="bottles5 absolute right-12 top-{10%} w-90 rotate-[6deg]"
        alt="bottle-5"
      />
      <img
        src="/Bottles-png/png5.png"
        className="bottles6 absolute right-2 top-[80%] w-90 rotate-[12deg]"
        alt="bottle-6"
      />
      <img
        src="/Bottles-png/png6.png"
        className="bottles7 absolute left-[90%] top-[50%] w-90 rotate-[6deg]"
        alt="bottle-7"
      />
      <img
        src="/Bottles-png/png7.png"
        className="bottles8 absolute right-[90%] top-[33%] w-90 rotate-[120deg]"
        alt="bottle-8"
      />
      <div className="backdrop-blur-sm bg-white/0 border border-white/20  p-8 shadow-xl w-full h-screen"></div>
    </div>
    </div>
  );
}
