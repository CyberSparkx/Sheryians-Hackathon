// src/Components/Products/ProductCard.jsx
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ProductCard = ({
  id,
  title,
  bg,
  mini,
  can,
  category,
  price,
  description,
  isReadOnly = false,
}) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const miniRefs = useRef([]);
  const canRef = useRef(null);

  useEffect(() => {
    if (isReadOnly) return;

    const card = cardRef.current;
    const minis = miniRefs.current;
    const canImg = canRef.current;
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(minis, { scale: 0.5, opacity: 0 }, {
      scale: 2,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.7)",
    });

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => {
      tl.reverse();
      gsap.to(minis, { x: 0, y: 0, duration: 0.4 });
      gsap.to(canImg, { x: 0, y: 0, rotate: 0, duration: 0.7 });
    };

    const handleMouseMove = (e) => {
      const bounds = card.getBoundingClientRect();
      const offsetX = (bounds.width / 2 - (e.clientX - bounds.left)) / 20;
      const offsetY = (bounds.height / 2 - (e.clientY - bounds.top)) / 20;

      minis.forEach((el, i) => {
        gsap.to(el, {
          x: offsetX * (1 + i * 0.2),
          y: offsetY * (1 + i * 0.2),
          duration: 0.4,
        });
      });

      gsap.to(canImg, {
        x: offsetX * 0.5,
        y: offsetY * 0.5,
        rotate: 25,
        duration: 0.4,
      });
    };

    if (card) {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
      card.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
        card.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isReadOnly]);

  const handleAddToCart = () => {
    if (isReadOnly) return;

    const item = { id, title, category, can, quantity: 1 };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex((i) => i.id === id);
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${title} added to cart!`);
  };

  const handleCardClick = () => {
    if (isReadOnly) return;
    if (!id) {
      toast.error("Invalid product ID!");
      return;
    }
    navigate(`/product-details/${id}`);
  };

  const miniPositions = [
    { top: "10%", left: "10%" },
    { top: "15%", right: "10%" },
    { bottom: "20%", left: "15%" },
    { bottom: "15%", right: "10%" },
  ];

  // 🛠 Debug Log (you can remove this later)
  useEffect(() => {
    console.log("✅ ProductCard ID:", id);
  }, [id]);

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className="relative w-[90vw] max-w-[400px] aspect-[3/5] rounded-3xl shadow-2xl flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {miniPositions.map((pos, i) => (
        <img
          key={i}
          ref={(el) => (miniRefs.current[i] = el)}
          src={mini}
          alt="mini"
          className="w-16 h-16 absolute pointer-events-none"
          style={pos}
        />
      ))}

      <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center absolute top-4 px-4 drop-shadow-lg">
        {title}
      </h2>

      <img
        ref={canRef}
        src={can}
        alt="Product Can"
        className="w-[100%] mt-12 select-none pointer-events-none"
      />

      {!isReadOnly && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            handleAddToCart();
          }}
          className="absolute bottom-6 bg-white px-5 py-2 rounded-full font-semibold text-[#111] text-sm sm:text-base md:text-lg shadow-md hover:bg-[#f4f4f4] transition duration-300"
        >
          Add to Cart 🛒
        </button>
      )}
    </div>
  );
};

export default ProductCard;
