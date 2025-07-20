import Hero3D from "./Components/Hero3D";
import Nav from "./Components/Nav";
import OurProducts from "./Components/OurProducts";
import PrimeFooter from "./Components/PrimeFooter";
import RightAroundCorner from "./Components/RightAroundCorner";
import ScrollTextFade from "./Components/ScrollTextFade";
import ShelfStableComponent from "./Components/ShelfStableComponent";
import VideoRevealComponent from "./Components/VideoRevealComponent";

const App = () => {
  return (
    <div className="bg-zinc-900 relative overflow-x-hidden">
      <Nav />
      <Hero3D />
      <ScrollTextFade />
     <OurProducts/>
     <ShelfStableComponent/>
     <VideoRevealComponent/>
     <RightAroundCorner/>
     <PrimeFooter/>
    </div>
  );
};

export default App;
