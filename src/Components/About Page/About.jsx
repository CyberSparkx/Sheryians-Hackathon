import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const founders = [
  {
    name: "Logan Paul",
    role: "Co-Founder",
    image: "/About Page Photo/Logan Paul.jpg",
    bio: `Logan Paul, a prominent YouTuber and entrepreneur, co-founded Prime with the vision of revolutionizing the hydration drink industry with bold flavors, clean ingredients, and viral branding.`
  },
  {
    name: "KSI (Olajide Olatunji)",
    role: "Co-Founder",
    image: "/About Page Photo/KSI.jpg",
    bio: `KSI, a UK-based entertainer and boxer, joined forces with Logan Paul to create a drink brand that delivers quality and style. His influence and business acumen helped Prime go global.`
  }
];

const About = () => {
  const leftCan = useRef();
  const rightCan = useRef();
  const container = useRef();

  useGSAP(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      const tl = gsap.timeline();

      tl.fromTo(
        leftCan.current,
        { x: "-150%", y: "-50%", opacity: 0, rotate: -30 },
        { x: "50%", y: "-50%", opacity: 1, rotate: 0, duration: 1.2,delay:2.5, ease: "power3.out" }
      ).fromTo(
        rightCan.current,
        { x: "150%", y: "-50%", opacity: 0, rotate: 30 },
        { x: "-50%", y: "-50%", opacity: 1, rotate: 0, duration: 1.2, ease: "power3.out" },
        "<"
      ).to(
        [leftCan.current, rightCan.current],
        {
          opacity: 0,
          scale: 0.3,
          duration: 0.8,
          delay: 0.6,
          ease: "power1.inOut"
        }
      );
    }
  }, { scope: container });

  return (
    <div
      className="bg-[#f6f1ea] text-[#4B2A1E] min-h-screen px-6 py-14 font-sans relative overflow-hidden"
      ref={container}
    >
      {/* Animated Prime Cans (hidden on small screens) */}
      <img
        ref={leftCan}
        src="/Bottles-png/png3.png"
        alt="Can Left"
        className="hidden lg:block absolute w-52 sm:w-64 top-[30%] left-0 opacity-0 z-50"
      />
      <img
        ref={rightCan}
        src="/Bottles-png/png6.png"
        alt="Can Right"
        className="hidden lg:block absolute w-52 sm:w-64 top-[30%] right-0 opacity-0 z-50"
      />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Prime</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4">
          Prime was created to fill the void in the hydration world — a drink that's bold, refreshing, and made to fuel champions.
        </p>
      </div>

      {/* Founders Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Meet the Founders</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-[#eba950] mb-4"
              />
              <h3 className="text-xl font-bold">{f.name}</h3>
              <p className="text-sm text-[#eba950] font-medium">{f.role}</p>
              <p className="text-gray-700 mt-4">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto mt-20 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Prime was officially launched in <strong>January 2022</strong> with the shared mission of delivering a better hydration solution.
          Logan Paul and KSI, once fierce rivals, came together in an unprecedented partnership that shook the internet.
          <br /><br />
          What began as a viral launch quickly evolved into a thriving global brand, selling out in stores around the world and earning a loyal fanbase.
          Prime isn’t just a drink — it’s a lifestyle.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Why Prime?</h3>
          <ul className="list-disc ml-5 text-gray-700">
            <li>No added sugar and low calories</li>
            <li>Bold and refreshing flavor lineup</li>
            <li>Electrolyte-fueled for real hydration</li>
            <li>Created by champions, for champions</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Join the Prime Movement</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          Whether you're training, gaming, or living life to the fullest — Prime is here to keep you energized and hydrated.
        </p>
        <button className="bg-[#4B2A1E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#eba950] hover:text-black transition-all">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default About;
