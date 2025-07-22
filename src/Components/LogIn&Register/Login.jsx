import { useRef, useState } from "react";
import { gsap } from "gsap";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export default function PrimeAuth() {
  const [isSignup, setIsSignup] = useState(false);

  // Login form states
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup form states
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const imageRef = useRef(null);
  const loginRef = useRef(null);
  const signupRef = useRef(null);

  const handleToSignup = () => {
    setIsSignup(true);
    gsap.to(imageRef.current, {
      x: "100%",
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(loginRef.current, { opacity: 0, duration: 0.4 });
    gsap.fromTo(
      signupRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
    );
  };

  const handleToLogin = () => {
    setIsSignup(false);
    gsap.to(imageRef.current, { x: "0%", duration: 0.8, ease: "power2.inOut" });
    gsap.to(signupRef.current, { opacity: 0, duration: 0.4 });
    gsap.fromTo(
      loginRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Optional: Add login logic here
    setLoginUsername("");
    setLoginPassword("");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Optional: Add signup logic here
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
  };

  return (
    <div className="w-screen pt-13 h-screen bg-[url('/bgs/products-bg1.svg')] bg-cover bg-center backdrop-blur-3xl flex items-center justify-center">
      <div className="w-[90vw] max-w-5xl h-[600px] bg-white rounded-2xl shadow-xl flex overflow-hidden relative">
        {/* Bottle Image */}
        <div
          ref={imageRef}
          className="w-1/2 h-full bg-gradient-to-tr from-pink-900 via-zinc-700 to-blue-900 
          hidden md:flex items-center justify-center transition-all duration-500 ease-in-out z-10 backdrop-blur-lg"
        >
          <img
            src="/Bottles-png/png2.png"
            alt="prime bottle"
            className="w-2/3 drop-shadow-2xl"
          />
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          ref={loginRef}
          className={`w-full md:w-1/2 h-full flex flex-col justify-center items-center p-10 space-y-6 transition-opacity duration-500 ${
            isSignup ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h2 className="text-3xl font-bold text-zinc-900">Login to Prime</h2>
          <div className="w-full space-y-4">
            <div className="flex items-center gap-2 bg-zinc-100 p-3 rounded-md">
              <FaUser className="text-zinc-600" />
              <input
                type="text"
                placeholder="Username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2 bg-zinc-100 p-3 rounded-md">
              <FaLock className="text-zinc-600" />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-black text-white rounded-md hover:bg-zinc-800 transition"
            >
              Login
            </button>
          </div>
          <p className="text-sm text-zinc-600">
            Don’t have an account?{" "}
            <button
              onClick={handleToSignup}
              type="button"
              className="text-black font-semibold underline"
            >
              Sign Up
            </button>
          </p>
        </form>

        {/* Signup Form */}
        <form
          onSubmit={handleSignup}
          ref={signupRef}
          className={`w-full md:w-1/2 h-full flex flex-col justify-center items-center p-10 space-y-6 absolute top-0 left-0 ${
            isSignup
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <h2 className="text-3xl font-bold text-zinc-900">Create Account</h2>
          <div className="w-full space-y-4">
            <div className="flex items-center gap-2 bg-zinc-100 p-3 rounded-md">
              <FaUser className="text-zinc-600" />
              <input
                type="text"
                placeholder="Full Name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2 bg-zinc-100 p-3 rounded-md">
              <FaEnvelope className="text-zinc-600" />
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2 bg-zinc-100 p-3 rounded-md">
              <FaLock className="text-zinc-600" />
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-black text-white rounded-md hover:bg-zinc-800 transition"
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm text-zinc-600">
            Already have an account?{" "}
            <button
              onClick={handleToLogin}
              type="button"
              className="text-black font-semibold underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
