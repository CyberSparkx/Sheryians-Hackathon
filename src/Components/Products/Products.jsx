import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import ProductCard from "./ProductCard";
import productData from "../data/productData";
import RightAroundCorner from "../Home/RightAroundCorner";
import PrimeFooter from "../Home/PrimeFooter";
import InfiniteScrollBanner from "./Product Details/InfiniteScrollBanner";
import ReviewSection from "../Home/ReviewSection";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Prime Bottles", "Prime Sticks", "Prime Can"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  // Refresh ScrollTrigger after products are filtered
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, [filteredProducts]);

  return (
    <>
      <InfiniteScrollBanner />

      <div className="w-full min-h-screen bg-[#faeade] px-4 py-10">
        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-black text-white shadow-md scale-105"
                  : "bg-gray-200 text-black hover:bg-black hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}              // ✅ Use ID as key for stability
              id={product.id}               // ✅ Pass the ID to ProductCard
              title={product.title}
              bg={product.bg}
              mini={product.mini}
              can={product.can}
              category={product.category}
            />
          ))}
        </div>
      </div>
      <ReviewSection/>
      <RightAroundCorner />
      <PrimeFooter />
    </>
  );
};

export default Products;
