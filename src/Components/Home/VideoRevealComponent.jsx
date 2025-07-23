import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const VideoRevealComponent = () => {
  const videoWrapperRef = useRef(null);
  const sectionRef = useRef(null); // Wrapper for pinning

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // Animate only on desktop screens (≥1024px)
      "(min-width: 1024px)": () => {
        const element = videoWrapperRef.current;

        const animation = gsap.fromTo(
          element,
          {
            scale: 0.1,
            borderRadius: "50%",
          },
          {
            scale: 1.3,
            borderRadius: "50%",
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=1500",
              scrub: true,
              pin: true,
            },
          }
        );

        return () => {
          animation.scrollTrigger?.kill();
          animation.kill();
        };
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-screen h-[40vh] md:h-[60vh] lg:h-screen bg-white overflow-hidden flex items-center justify-center"
    >
      <div
        ref={videoWrapperRef}
        className="w-[100vw] h-[30vh] md:h-[40vh] lg:h-[100vw] overflow-hidden relative bg-zinc-900 shadow-2xl lg:rounded-full"
      >
        <video
          src="https://res.cloudinary.com/djgpjawaj/video/upload/v1753254789/video_yolpaa.mkv"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Play icon with blur backdrop */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="backdrop-blur-md bg-white/20 w-20 h-20 rounded-full flex items-center justify-center text-white text-xl">
            <FaPlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRevealComponent;
