// src/Pages/ProductDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import productData from "../data/productData";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productData.find((product) => String(product.id) === id);
    if (!foundProduct) {
      navigate("/"); // Redirect if not found
    } else {
      setProduct(foundProduct);
    }
  }, [id, navigate]);

  if (!product) return null;

  const { title, price, description, can, bg, category } = product;

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = existingCart.findIndex((item) => item.title === title);

    if (index >= 0) {
      existingCart[index].quantity += 1;
    } else {
      existingCart.push({
        title,
        category,
        can,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success(`${title} added to cart!`);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 backdrop-blur-lg p-10 rounded-3xl text-center shadow-xl max-w-xl">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <img src={can} alt={title} className="w-64 mx-auto mb-6" />
        <p className="text-lg leading-relaxed">{description}</p>
        <h2 className="text-2xl mt-6 font-semibold">₹{price}</h2>
        <button
          onClick={handleAddToCart}
          className="mt-6 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
