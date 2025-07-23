import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaTint, FaBan, FaLeaf } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import { BsCapsule } from "react-icons/bs";

const PrimeDrinkBottle = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/products");
  };

  const features = [
    {
      icon: <PiBowlFoodFill className="text-5xl text-black" />,
      label: "10% COCONUT WATER",
    },
    {
      icon: <FaBan className="text-5xl text-black" />,
      label: "CAFFEINE FREE",
    },
    {
      icon: <FaBolt className="text-5xl text-black" />,
      label: "700mg+ ELECTROLYTES",
    },
    {
      icon: <BsCapsule className="text-5xl text-black" />,
      label: "B VITAMINS",
    },
    {
      icon: <FaLeaf className="text-5xl text-black" />,
      label: "ANTIOXIDANTS",
    },
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center text-black mb-16">
        PRIME ICE
      </h1>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/Bottles-png/PrimeTrimurti.png"
              alt="Prime Ice Bottles"
              className="max-w-lg w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center items-center lg:items-start py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-12 gap-y-16 w-full max-w-lg">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="mb-3">{feature.icon}</div>
                  <p className="text-lg font-bold text-gray-800 leading-tight tracking-wide">
                    {feature.label}
                  </p>
                </div>
              ))}

            </div>

            <div className="pt-12 w-full max-w-xs mx-auto lg:mx-0">
              <button
                onClick={handleOrderClick}
                className="w-full bg-black text-white px-10 py-5 font-bold text-lg tracking-wider hover:bg-gray-800 transition-colors duration-300"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimeDrinkBottle;
