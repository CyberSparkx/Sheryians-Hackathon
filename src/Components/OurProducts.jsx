import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Product from "./Product";
import ProductsBanner from "./ProductsBanner";
import canImg from "/Bottles-png/primebottls.png";
import bgImage from "/bgs/products-bg2.svg";

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const scrollContent = scrollContentRef.current;
    const contentWidth = scrollContent.scrollWidth;
    const viewportWidth = scrollContainer.offsetWidth;

    const scrollAmount = contentWidth - viewportWidth;

    gsap.to(scrollContent, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top top",
        end: () => `+=${scrollAmount}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white h-screen overflow-hidden relative">
      <div
        ref={scrollContentRef}
        className="flex gap-10 px-10 h-full items-center w-max"
      >
        <ProductsBanner />
        <div className="shrink-0">
          <Product canImg={canImg} bgImage={bgImage} title="PRIME DRINK BOTTLES" />
        </div>
        <div className="shrink-0">
          <Product canImg={canImg} bgImage={bgImage} title="PRIME DRINK BOTTLES" />
        </div>
        <div className="shrink-0">
          <Product canImg={canImg} bgImage={bgImage} title="PRIME DRINK BOTTLES" />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
