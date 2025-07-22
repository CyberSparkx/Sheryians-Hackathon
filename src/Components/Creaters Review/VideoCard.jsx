import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // or use any icon library

const VideoCard = ({ videoSrc, thumbnail, userPhoto, userName }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      // Do NOT reset to start
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      className="relative w-full  max-w-xs aspect-[9/16] overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted={isMuted}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        poster={thumbnail}
      />

      {/* User Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex items-center space-x-3">
        <img
          src={userPhoto}
          alt={userName}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span className="text-white text-lg font-medium">{userName}</span>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-2 right-2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default VideoCard;
