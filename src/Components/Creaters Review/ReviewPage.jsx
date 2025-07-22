import React from "react";
import VideoCard from "./VideoCard";
import PrimeFooter from "../Home/PrimeFooter";
import RightAroundCorner from "../Home/RightAroundCorner";

const reviewData = [
  {
    id: 1,
    videoSrc:"/Review/Video/speedTries.webm",
    userPhoto:"/Review/DP/IShowSpeed.png",
    userName:"I Show Speed"
  },
  {
    id: 2,
    videoSrc:"/Review/Video/Live Morgan.webm",
    userPhoto:"/Review/DP/img2.jpg",
    userName: "Live Morgan",
  },
  {
    id: 3,
    videoSrc:"/Review/Video/KSi.webm",
    userPhoto:"/About Page Photo/KSI.jpg",
    userName: "KSI",
  },
  {
    id: 4,
    videoSrc:"/Review/Video/mrbeast.webm",
    userPhoto:"/Review/DP/LoganPaul.jpg",
    userName:"Logan Paul"
  },
  {
    id: 5,
    videoSrc:"/Review/Video/friedChicken.webm",
    userPhoto:"/Review/DP/img6.webp",
    userName:"I Don't Know"
  },
  {
    id: 6,
     videoSrc:"/Review/Video/hydration.webm",
    userPhoto:"/Review/DP/img1.jpg",
    userName:"Bhartiya Crazy Bhaiya"
  },
  {
    id: 7,
    videoSrc:"/Review/Video/wwe.webm",
    userPhoto:"/Review/DP/LoganPaul.jpg",
    userName:"Logan Paul"
  },
  {
    id: 8,
    videoSrc:"/Review/Video/ddd.webm",
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
