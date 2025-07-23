import React from "react";
import VideoCard from "../Creaters Review/VideoCard";

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
];

const ReviewVideos = () => {
  return (
    <div className="min-h-screen absolute top-[10%] left-[0%] z-[10] px-4 py-20 w-full">
      {/* ✅ Swipe layout for mobile and tablets */}
      <div className="block lg:hidden">
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-2">
          {reviewData.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 snap-start w-[80vw] max-w-[350px]"
            >
              <VideoCard
                videoSrc={item.videoSrc}
                userPhoto={item.userPhoto}
                userName={item.userName}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🖥️ Grid layout only for large screens and up */}
      <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reviewData.map((item) => (
          <div key={item.id}>
            <VideoCard
              videoSrc={item.videoSrc}
              userPhoto={item.userPhoto}
              userName={item.userName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewVideos;
