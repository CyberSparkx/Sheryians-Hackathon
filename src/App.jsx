import {  Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './Components/LogIn&Register/Login.jsx'
import Nav from "./Components/Home/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import Products from "./Components/Products/Products.jsx";
import ProductDetails from "./Components/Products/ProductDetails.jsx";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";
import About from "./Components/About Page/About.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import LoadingScreen from "./Components/Loading Screen/LoadingScreen.jsx";
import PageNotFound from './Components/404 Page Not Found/PageNotFound.jsx';
import ReviewPage from "./Components/Creaters Review/ReviewPage.jsx";
import MouseSparkleEffect from "./Components/Mouse Sparck/MouseSparkleEffect.jsx";
import Lenis from 'lenis'


const App = () => {

  // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

  return (
    <>
      <div className="  bg-[#f9f9f9] min-h-screen">
        <Nav />
        <LoadingScreen/>
        <MouseSparkleEffect/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/reviews" element={<ReviewPage/>} />
           {/* Catch-all route for 404 - must be last */}
        <Route path="*" element={<PageNotFound />} />
        
        </Routes>

        <ToastContainer position="bottom-left" autoClose={2000} />
      </div>
    </>
  );
};

export default App;
