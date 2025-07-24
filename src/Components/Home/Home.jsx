import Hero3D from "./Hero3D";
import OurProducts from "./OurProducts";
import PrimeFooter from "./PrimeFooter";
import PrimeProductShowcase from "./PrimeProductShowcase";
import ReviewSection from "./ReviewSection";
import RightAroundCorner from "./RightAroundCorner";
import ScrollTextFade from "./ScrollTextFade";
import ShelfStableComponent from "./ShelfStableComponent";
import VideoRevealComponent from "./VideoRevealComponent";

const Home = () => {
  return (
    <div className="bg-zinc-900 relative overflow-x-hidden">
      <Hero3D />
      <ScrollTextFade />
     <OurProducts/>
     <ShelfStableComponent/>
     <VideoRevealComponent/>
     <PrimeProductShowcase/>
     <ReviewSection/>
     {/* <ReviewVideos/> */}
     <RightAroundCorner/>
     <PrimeFooter/>
    </div>
  );
};

export default Home;
