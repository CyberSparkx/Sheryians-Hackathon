import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FrameScroller() {
  const canvasRef = useRef(null); // using useRef instead of querySelector
  const [images, setImages] = useState([]);
  const frame = useRef({ currentIndex: 0, maxIndex: 643 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const loadedImages = [];

    let imagesLoaded = 0;

    const preloadImages = () => {
      for (let i = 0; i <= frame.current.maxIndex; i++) {
        const img = new Image();
        img.src = `/Frames/frame_${i.toString().padStart(4, "0")}.jpg`;

        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frame.current.maxIndex + 1) {
            setImages(loadedImages); // set all images once done
            drawImage(loadedImages[0]);
            setupScrollAnimation(loadedImages);
          }
        };

        loadedImages.push(img);
      }
    };

    const drawImage = (img) => {
      if (!img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
    };

    const setupScrollAnimation = (imageArray) => {
      gsap.to(frame.current, {
        currentIndex: frame.current.maxIndex,
        ease: "none",
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
        onUpdate: () => {
          const currentFrame = Math.floor(frame.current.currentIndex);
          drawImage(imageArray[currentFrame]);
        },
      });
    };

    preloadImages();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="parent w-full h-[5000px] relative">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-[200] pointer-events-none"
      />
    </section>
  );
}
