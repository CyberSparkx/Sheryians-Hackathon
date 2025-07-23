import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Product from "./Product";
import ProductsBanner from "./ProductsBanner";

gsap.registerPlugin(ScrollTrigger);

// Product data array with title, canImg, and bgImage
const productData = [
  {
    id: 1,
    title: "PRIME BOTTLE",
    canImg: "/Bottles-png/primebottls.png",
    bgImage: "/bgs/products-bg1.svg",
  },
  {
    id: 2,
    title: "PRIME DRINK CAN",
    canImg: "/Bottles-png/cans-bg-removed.png",
    bgImage: "/bgs/product-bg3.svg",
  },
  {
    id: 3,
    title: "PRIME STICK",
    canImg: "/Bottles-png/Prime-Sticks-removebg.png",
    bgImage: "/bgs/products-bg2.svg",
  },
];

const OurProducts = () => {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);

  useEffect(() => {
    // Animate only on screens wider than 768px
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        const scrollContainer = containerRef.current;
        const scrollContent = scrollContentRef.current;

        const contentWidth = scrollContent.scrollWidth;
        const viewportWidth = scrollContainer.offsetWidth;
        const scrollAmount = contentWidth - viewportWidth;

        const animation = gsap.to(scrollContent, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: () => `+=${scrollAmount + 10}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        return () => {
          animation.scrollTrigger?.kill();
          animation.kill();
        };
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white h-auto md:h-screen flex items-center overflow-x-hidden relative"
    >
      <div
        ref={scrollContentRef}
        className="flex flex-col md:flex-row  gap-10 px-6 py-10 md:px-10 md:py-0 items-center w-full md:w-max"
      >
        <ProductsBanner />
        {productData.map(({ id, title, canImg, bgImage }) => (
          <div className="shrink-0 w-full md:w-auto" key={id}>
            <Product title={title} canImg={canImg} bgImage={bgImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
