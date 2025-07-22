import { useRef, useState } from "react";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function PrimeContact() {
  const containerRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.warning("Please fill in all fields");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  useGSAP(() => {
    gsap.from(".fade-in", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });
  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-[url('/bgs/product-bg3.svg')] bg-cover bg-center backdrop-blur-3xl text-white flex items-center justify-center px-4 py-10 md:py-16 overflow-auto relative">
      <ToastContainer position="top-right" autoClose={3000} />

      <div
        ref={containerRef}
        className="w-full mt-10 max-w-4xl bg-black/30 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-xl border border-black/20 fade-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center fade-in">
          Contact PRIME
        </h2>
        <p className="text-center text-zinc-200 mb-6 md:mb-10 fade-in">
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="fade-in">
            <label className="block mb-1 text-sm">Name</label>
            <div className="flex items-center gap-2 bg-white/10 rounded-md p-3">
              <FaUser className="text-zinc-200" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>
          </div>

          <div className="fade-in">
            <label className="block mb-1 text-sm">Email</label>
            <div className="flex items-center gap-2 bg-white/10 rounded-md p-3">
              <FaEnvelope className="text-zinc-200" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>
          </div>

          <div className="fade-in">
            <label className="block mb-1 text-sm">Message</label>
            <div className="flex items-start gap-2 bg-white/10 rounded-md p-3">
              <FaCommentDots className="text-zinc-200 mt-1" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message..."
                className="bg-transparent outline-none text-white w-full resize-none"
              />
            </div>
          </div>

          <div className="fade-in text-center pt-2">
            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-zinc-100 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
