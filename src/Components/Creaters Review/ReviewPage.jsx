import React from "react";
import VideoCard from "./VideoCard";
import PrimeFooter from "../Home/PrimeFooter";
import RightAroundCorner from "../Home/RightAroundCorner";

const reviewData = [
  {
    id: 1,
    videoSrc: "https://res.cloudinary.com/djgpjawaj/video/upload/v1753254241/speedTries_zg6gwh.webm",
    userPhoto: "/Review/DP/IShowSpeed.png",
    userName: "I Show Speed",
  },
  {
    id: 2,
    videoSrc: "https://res.cloudinary.com/djgpjawaj/video/upload/v1753254271/Live_Morgan_flerma.webm",
    userPhoto: "/Review/DP/img2.jpg",
    userName: "Live Morgan",
  },
  {
    id: 3,
    videoSrc: "https://res.cloudinary.com/djgpjawaj/video/upload/v1753254250/KSi_hwi7oq.webm",
    userPhoto: "/About Page Photo/KSI.jpg",
    userName: "KSI",
  },
  {
    id: 4,
    videoSrc:"https://res.cloudinary.com/djgpjawaj/video/upload/v1753254237/mrbeast_d3wgkv.webm",
    userPhoto:"/Review/DP/LoganPaul.jpg",
    userName:"Logan Paul"
  },
  {
    id: 5,
    videoSrc:"https://res.cloudinary.com/djgpjawaj/video/upload/v1753254235/friedChicken_dpyhyu.webm",
    userPhoto:"/Review/DP/img6.webp",
    userName:"I Don't Know"
  },
  {
    id: 6,
     videoSrc:"https://res.cloudinary.com/djgpjawaj/video/upload/v1753254258/hydration_wsk1ms.webm",
    userPhoto:"/Review/DP/img1.jpg",
    userName:"Bhartiya Crazy Bhaiya"
  },
  {
    id: 7,
    videoSrc:"https://res.cloudinary.com/djgpjawaj/video/upload/v1753254257/wwe_wm2kdk.webm",
    userPhoto:"/Review/DP/LoganPaul.jpg",
    userName:"Logan Paul"
  },
  {
    id: 8,
    videoSrc:"https://res.cloudinary.com/djgpjawaj/video/upload/v1753254236/ddd_yfa8ia.webm",
    userPhoto:"/Review/DP/img6.webp",
    userName: "Footballer",
  },
];

const ReviewPage = () => {
  return (
    <>
    <div className="min-h-screen bg-[#faeade] py-16 px-4 md:px-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Prime Reviews
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {reviewData.map((review) => (
          <VideoCard
            key={review.id}
            videoSrc={review.videoSrc}
            userPhoto={review.userPhoto}
            userName={review.userName}
          />
        ))}
      </div>

    </div>
      <RightAroundCorner/>
      <PrimeFooter/>
    </>
  );
};

export default ReviewPage;
