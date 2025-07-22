import { useRef, useEffect } from "react";
import gsap from "gsap";

const InfiniteScrollBanner = () => {
  const bannerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tween = gsap.to(".scroll-text", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });

      return () => {
        tween.kill();
      };
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#f9e7db]"
    >
      <div className="absolute top-1/2 -translate-y-1/2 w-[200%] flex scroll-text text-[15vw] font-extrabold uppercase tracking-tight leading-none whitespace-nowrap text-[#4B2A1E]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-[8vw] px-[4vw]">
            <span>Explore</span>
            <span className="text-[#eba950]">Full</span>
            <span>Collection</span>
          </div>
        ))}
      </div>

      {/* Subtext */}
      <p className="absolute bottom-16 text-center text-base text-[#4B2A1E]">
        Browse all our bold and delicious flavors, ready to fuel your next adventure.
      </p>
    </div>
  );
};

export default InfiniteScrollBanner;
