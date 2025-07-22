import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const [products, setProducts] = useState([]);
  const [user] = useState({
    name: "Naren Roy",
    email: "email69@gmail.com",
    profileImage:
      "https://avatars.githubusercontent.com/u/121963472?v=4",
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(storedProducts);
  }, []);

  const handleOrder = () => {
    localStorage.removeItem("cart");
    setProducts([]);
    toast.success("🎉 Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcebd5] to-[#f6f1ea] px-6 py-10 pt-17 font-sans">
      {/* Profile Card */}
      <div className=" lg:w-[75vw] mx-auto bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-6 transition-all">
        <img
          src={user.profileImage}
          alt="User"
          className="w-32 h-32 rounded-full object-cover border-4 border-[#eba950] shadow-lg hover:scale-105 transition duration-300"
        />
        <div>
          <h2 className="text-3xl font-bold text-[#4B2A1E]">{user.name}</h2>
          <p className="text-md text-gray-600 mt-1">{user.email}</p>
        </div>
      </div>

      {/* Product Table */}
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-semibold mb-6 text-[#4B2A1E]">🛒 Your Cart</h3>

        {products.length === 0 ? (
          <p className="text-gray-500 text-center py-6">Your cart is currently empty.</p>
        ) : (
          <div className="pt-5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-[#4B2A1E] bg-[#fcebd5] text-sm uppercase">
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((prod, index) => (
                    <tr
                      key={index}
                      className="bg-[#fffaf4] hover:bg-[#fef2dc] transition duration-300 rounded-xl shadow-md"
                    >
                      <td className="px-4 py-2">
                        <img
                          src={prod.can || prod.mini || prod.bg}
                          alt={prod.title}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                      </td>
                      <td className="px-4 py-2 text-[#4B2A1E] font-medium">{prod.title}</td>
                      <td className="px-4 py-2 text-gray-600">{prod.category}</td>
                      <td className="px-4 py-2">{prod.quantity || 1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={handleOrder}
                className="bg-[#4B2A1E] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#eba950] hover:text-black transition-all shadow-md"
              >
                ✅ Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
